from django.db import models

# Create your models here.

class starShips(models.Model):
    type = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    owner = models.CharField(max_length=30)
    
