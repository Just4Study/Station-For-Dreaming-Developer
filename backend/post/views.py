from django.shortcuts import render
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from .models import Post
from .serializers import PostSerializer

# generics 에 목록과 생성 API 가 정의되어 있다
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['team_type', 'region', 'dev_category']

# generics 에 상세, 수정, 삭제 API가 정의되어 있다
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
# Create your views here.
