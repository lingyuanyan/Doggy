from rest_framework import serializers
from DoggyApp.models import DoggyInfo


class DoggyInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = DoggyInfo
        fields = (
                 'id',
                 'name',
                 'pic',
                 'caption',
                 'des'
                 )
