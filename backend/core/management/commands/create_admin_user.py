from django.core.management.base import BaseCommand
from django.conf import settings
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Creates an admin user in case it not exists'

    def handle(self, *args, **options):
        user, created = User.objects.get_or_create(username=settings.ADMIN_USERNAME)

        if created:
            user.set_password(settings.ADMIN_PASSWORD)

        user.is_superuser = True
        user.is_staff = True
        user.save()
