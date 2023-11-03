from django.db import models
from user_app.models import CustomUser

# Create your models here.
class FavoritePicsManager(models.Manager):
    def get_pics_for_user(self, user):
        return self.filter(user=user)


class FavoritePics(models.Model):
    copyright = models.CharField(max_length=50)
    date = models.DateField()
    explanation = models.TextField()
    hdurl = models.URLField()
    title = models.CharField(max_length=50)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    objects = FavoritePicsManager()

    def __str__(self):
        return f"{self.date, self.title}"
