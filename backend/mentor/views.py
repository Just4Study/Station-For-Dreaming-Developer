from django.shortcuts import render
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .models import Mentor
from .serializers import MentorSerializer

class ListMentor(generics.ListAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['dev_category']

class DetailMentor(generics.RetrieveAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer
