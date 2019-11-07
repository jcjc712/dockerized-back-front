from django.core.management.base import BaseCommand
from django.conf import settings
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Creates an admin user in case it not exists'

    def handle(self, *args, **options):
        user = User.objects.create_user(username=settings.ADMIN_USERNAME, password=settings.ADMIN_PASSWORD)
        user.is_superuser = True
        user.is_staff = True
        user.save()
