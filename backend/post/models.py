from django.db import models

class Post(models.Model):
    auto_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=20)
    team_type = models.CharField(max_length=20)
    region = models.CharField(max_length= 10)
    end_date = models.DateField(null = True)
    preference = models.CharField(max_length=20, blank=True)
    dev_category = models.CharField(max_length = 10)
    comment = models.TextField()

    def __str__(self):
        return self.title

# Create your models here.
