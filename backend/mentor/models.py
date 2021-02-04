from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=10)
    company = models.CharField(max_length=20)
    dev_category = models.CharField(max_length = 10)
    description = models.CharField(max_length = 30)
    content = models.TextField()
    image = models.ImageField(upload_to="Profile_Image")

# Create your models here.
