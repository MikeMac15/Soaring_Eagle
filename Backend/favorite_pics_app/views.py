from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import FavPicSerializer, FavoritePics

# Create your views here.

class FavList(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes= [IsAuthenticated]

    def get(self, request):
        user = request.user
        favorite_pics = FavoritePics.objects.get_pics_for_user(user)
        serializer = FavPicSerializer(favorite_pics, many = True)

        return Response(serializer.data, status=HTTP_200_OK)
    
    def post(self, request):
        user = request.user
        data = request.data

        data['user'] = user.id

        serializer = FavPicSerializer(data= data)

        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
class deleteFavorite(APIView):
    def delete(self, request, pk):
        user = request.user
        fav_pic = get_object_or_404(FavoritePics, pk=pk, user=user)

        if fav_pic.user != user:
            return Response('wrong user')
        
        fav_pic.delete()
        return Response(status=HTTP_204_NO_CONTENT)
