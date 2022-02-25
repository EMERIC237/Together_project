from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Actor


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'
    # memberId = serializers.IntegerField(read_only=True)
    # firstName = serializers.CharField(
    #     required=True, allow_blank=False, max_length=50)
    # lastName = serializers.CharField(
    #     required=True, allow_blank=False, max_length=50)
    # userName = serializers.CharField(
    #     required=False, allow_blank=True, max_length=30)
    # email = serializers.EmailField(max_length=254)
    # tel = serializers.CharField(max_length=50)
    # city = serializers.CharField(max_length=30)
    # state = serializers.CharField(max_length=3, default='NA')
    # zipCode = serializers.CharField(max_length=10, default='NA')
    # image = serializers.ImageField(
    #     max_length=None, use_url=True, allow_null=True, required=False)

    # def create(self, validated_data):
    #     """
    #     Create and return a new `Actor` instance, given the validated data.
    #     """
    #     return Actor.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Actor` instance, given the validated data.
    #     """
    #     instance.firstName = validated_data.get(
    #         'firstName', instance.firstName)
    #     instance.lastName = validated_data.get('lastName', instance.lastName)
    #     instance.userName = validated_data.get('userName', instance.userName)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.tel = validated_data.get('tel', instance.tel)
    #     instance.city = validated_data.get('city', instance.city)
    #     instance.state = validated_data.get('state', instance.state)
    #     instance.zipCode = validated_data.get('zipCode', instance.zipCode)
    #     instance.image = validated_data.get('image', instance.image)

    #     instance.save()
    #     return instance
