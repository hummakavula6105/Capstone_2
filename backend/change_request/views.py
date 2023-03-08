from django.shortcuts import get_object_or_404
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
    


@api_view(['GET', 'PUT', 'DELETE'])
def approve_or_reject_request(request, pk):
    req_instance = get_object_or_404(Request, pk=pk)
    if request.method == 'GET':
        serializer = RequestSerializer(req_instance)
        return Response(serializer.data)
    elif request.method == 'PUT':
        try:
            serializer = RequestSerializer(req_instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        except(KeyError, ValueError):
            return Response({'message': 'User not authorized'}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        req_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
