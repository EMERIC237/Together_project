from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _
# Create your models here.


def upload_to(instance, filename):
    return 'media/{}/{}'.format(instance.user_id, filename)


class Actor(models.Model):
    memberId = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    userName = models.CharField(max_length=30, default='NA')
    email = models.EmailField(max_length=254)
    tel = PhoneNumberField(_("phone number"), null=False,
                           blank=False, unique=True)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=3, default='NA')
    zipCode = models.CharField(max_length=10, default='NA')
    image = models.ImageField('profiles')

    class Meta:
        ordering = ['firstName']

    def __str__(self):
        return self.firstName
