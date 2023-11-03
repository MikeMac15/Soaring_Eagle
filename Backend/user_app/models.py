from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password):
        if not username:
            raise ValueError('Username field required')
        if not password:
            raise ValueError('Password field required')
        user = self.model(username=username)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, username, password):
        user = self.create_user(username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(unique=True, max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'

    