# Generated by Django 4.0.2 on 2022-02-25 00:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('actors', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Actors',
            new_name='Actor',
        ),
    ]