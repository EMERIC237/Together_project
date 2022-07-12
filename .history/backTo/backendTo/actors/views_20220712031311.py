from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Actor
from .serializers import ActorSerializer
from rest_framework import status

# Create your views here.


@api_view(['GET', 'POST'])
def actor_list(request, format=None):
    """
    List all actor, or create a new actor
    """
    if(request.method == 'GET'):
        actors = Actor.objects.all()
        serializer = ActorSerializer(actors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ActorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def actor_detail(request, pk, format=None):
    """
    Retrieve, update or delete an actor
    """
    try:
        actor = Actor.objects.get(pk=pk)
    except Actor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ActorSerializer(actor)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ActorSerializer(Actor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        actor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
