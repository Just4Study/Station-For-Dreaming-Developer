from django.shortcuts import render
from rest_framework import generics

from .models import Mentor
from .serializers import MentorSerializer

class ListMentor(generics.ListAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer

class DetailMentor(generics.RetrieveAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer
