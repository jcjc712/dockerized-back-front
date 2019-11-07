from rest_framework import serializers
from check_list import models


class StuffSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CheckList
        fields = '__all__'
