
#!/bin/bash
set -e

echo "Running migrations..."
gosu www-data python manage.py migrate

echo "Get or create superuser"
gosu www-data python manage.py create_admin_user
