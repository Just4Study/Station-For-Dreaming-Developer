from django.db import models

class Mentor(models.Model):
    auto_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    company = models.CharField(max_length=20)
    dev_category = models.CharField(max_length = 10)
    description = models.CharField(max_length = 30)
    content = models.TextField()
    image = models.ImageField(upload_to="img")

# Create your models here.
