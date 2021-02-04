from rest_framework import serializers
from .models import Mentor

class MentorSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Mentor
        fields = ('name', 'company', 'dev_category', 'description', 'content', 'image')
