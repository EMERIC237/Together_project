from django.db import models
from django.core.validators import RegexValidator
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
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True) # Validators should be a list
     = models.PhoneNumberField(max_length=50)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=3, default='NA')
    zipCode = models.CharField(max_length=10, default='NA')
    image = models.ImageField('profiles')

    class Meta:
        ordering = ['firstName']

    def __str__(self):
        return self.firstName
