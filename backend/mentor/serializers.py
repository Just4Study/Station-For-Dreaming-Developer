from rest_framework import serializers
from .models import Mentor

class MentorSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Mentor
        fields = ('auto_id', 'name', 'company', 'dev_category', 'url', 'content', 'image')
