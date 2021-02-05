from django.db import models

# Create your models here.


class User(models.Model):
    user_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=30)
    password = models.CharField(max_length=20)
    school_name = models.CharField(max_length=20)
    major = models.CharField(max_length=20)

    class Meta:
        db_table = 'users'
