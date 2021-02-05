from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('auto_id','title', 'author', 'team_type', 'region', 'end_date', 'dev_category', 'comment')