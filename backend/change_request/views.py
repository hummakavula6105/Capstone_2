import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from .models import Request
from .serializers import RequestSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_requests(request):
    request = request.query_params.get('request')
    queryset = Request.objects.all()
    if request:
        queryset = queryset.filter(request__=request)
    requests = Request.objects.all()
    serializer = RequestSerializer(requests, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def new_request(request):

    if request.method == 'POST':
        serializer = RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        request = Request.objects.filter(request_id=request.query_params.get("request_id"))
        serializer = RequestSerializer(request, many=True)
        return Response(serializer.data)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def approve_or_reject_request(request):

    if request.method == 'PUT':
        serializer = RequestSerializer(data=request.data)
        request_id = int(request.data['request_id'])
        if serializer.is_valid():
            try:
                approver = Request.objects.get(request_id=request_id)
                is_approved = request.data.put('is_approved', True)
                is_rejected = request.data.put('is_rejected', True)
                if is_approved and is_rejected:
                    return Response({'message': 'Cannot approve and reject request at the same time'}, status=status.HTTP_400_BAD_REQUEST)
                approver.is_approved = is_approved
                approver.is_rejected = is_rejected
                approver.save()
                return Response({'message': 'Request updated'}, status=status.HTTP_200_OK)
            except (KeyError, ValueError):
                return Response({'message': 'Invalid request ID or user not authorized'}, status=status.HTTP_400_BAD_REQUEST)
