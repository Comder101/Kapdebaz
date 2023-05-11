from django.db import models

# Create your models here.
class custom(models.Model):
    lowertext=models.CharField(max_length=50, default="fruits")
    uppertext=models.CharField(max_length=50, default="fruits")
    # color= models.CharField(max_length=30, default='', blank=True, null= True)


    @staticmethod
    def get_all_categories():
        return custom.objects.all()
    
    def __str__(self):
        return self.name