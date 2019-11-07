from django.db import models


class CheckList(models.Model):
    id = models.AutoField(primary_key=True)
    subject = models.CharField(max_length=255, null=True)
    status = models.BooleanField(null=True)
