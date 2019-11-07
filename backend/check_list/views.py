from rest_framework import viewsets
from check_list.models import CheckList
from check_list.serializers import StuffSerializer


class CheckListViewSet(viewsets.ModelViewSet):
    queryset = CheckList.objects.all()
    serializer_class = StuffSerializer
