from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

# generics 에 목록과 생성 API 가 정의되어 있다
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# generics 에 상세, 수정, 삭제 API가 정의되어 있다
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
# Create your views here.
