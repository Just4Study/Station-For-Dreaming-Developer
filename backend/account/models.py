from django.db import models

class Account(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=50)
    name = models.CharField(max_length=10)
    school = models.CharField(max_length=30)
    major = models.CharField(max_length=50)

    def __str__(self):
        return self.email

# Create your models here.
