from django.contrib.auth.models import User
from django.core.management import call_command
from django.test import TestCase


class CommandsTestCase(TestCase):
    def test_command_create_admin_user(self):
        call_command('create_admin_user')
        user = User.objects.get(username='admin',)
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
