from rest_framework import serializers
from .models import *
class CustomSerializer(serializers.ModelSerializer):
    class Meta:
        model = custom
        fields = '__all__'