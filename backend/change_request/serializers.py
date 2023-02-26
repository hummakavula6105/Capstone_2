from dataclasses import fields
from rest_framework import serializers
from .models import User
from .models import Area
from .models import Request


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'user', 'isApprover', 'isAdmin']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)


class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['id', 'area']
        depth = 1


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['id', 'date_requested', 'expiration_date', 'area', 'reason_for_request', 'description_of_change', 'tasks', 'is_approved', 'is_rejected']
        depth = 1

