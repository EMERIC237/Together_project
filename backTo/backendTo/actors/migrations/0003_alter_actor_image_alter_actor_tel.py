# Generated by Django 4.0.2 on 2022-02-25 02:51

import actors.models
from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('actors', '0002_rename_actors_actor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='actor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=actors.models.upload_to, verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='actor',
            name='tel',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True, verbose_name='phone number'),
        ),
    ]
