from django.urls import path
from .views import FavList, deleteFavorite


urlpatterns = [
    path("favlist/", FavList.as_view(), name="favlist"),
    path('favlist/<int:pk>/', deleteFavorite.as_view(), name='deleteFavorite')

]