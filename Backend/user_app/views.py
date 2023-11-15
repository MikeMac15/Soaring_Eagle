from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import CustomUser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import logging


# Create your views here.
class Sign_up(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'Error': 'Both username & password required.'})

        new_user = CustomUser.objects.create_user(username, password)
        token, created = Token.objects.get_or_create(user=new_user)
        print(f"Token: {token.key}")
        return Response(
            {'user': new_user.username, 'token': token.key},
            status=HTTP_201_CREATED
        )

class Log_in(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "username": user.username})
        else:
            return Response("No trainer matching credentials", status=HTTP_404_NOT_FOUND)


class Log_out(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes= [IsAuthenticated]

    def post(self, request):
        user = request.user
        token = request.auth  

        print(f"User: {user.username}, Token: {token.key}") 

        token.delete()  
        return Response(status=HTTP_204_NO_CONTENT)

class Info(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        return Response({"username": request.user.username})

