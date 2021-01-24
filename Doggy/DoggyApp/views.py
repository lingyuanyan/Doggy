from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from DoggyApp.models import DoggyInfo
from DoggyApp.serializers import DoggyInfoSerializer
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework import permissions


def index(request):
    pass

class DoggyViewSet(viewsets.ModelViewSet):
    """docstring for ."""
    queryset = DoggyInfo.objects.all()
    serializer_class = DoggyInfoSerializer
    permission_classes = [permissions.AllowAny]
