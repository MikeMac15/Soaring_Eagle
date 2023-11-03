from rest_framework.serializers import ModelSerializer
from .models import FavoritePics

class FavPicSerializer(ModelSerializer):
    class Meta:
        model = FavoritePics
        fields = ['id', 'copyright', 'date', 'explanation', 'hdurl', 'title', 'user']