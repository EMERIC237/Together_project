from django.db import models

# Create your models here.


class Actor(models.Model):
    memberId = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    userName = models.CharField(max_length=30, default='NA')
    email = models.EmailField(max_length=254)
    tel = models.CharField(max_length=50)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=3, default='NA')
    zipCode = models.CharField(max_length=10, default='NA')
    image = models.ImageField(upload_to='post_images')

    class Meta:
        ordering = ['firstName']

    def __str__(self):
        return self.firstName
