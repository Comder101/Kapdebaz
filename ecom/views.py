from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from ecom.models import *
from ecom.serializers import *

# Create your views here.
def index(request):
    return render(request,'index.html')

@api_view(['GET', 'POST'])
def custom_list(request):
    if request.method == 'GET':
        data = custom.objects.all()

        serializer = CustomSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CustomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)