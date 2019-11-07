
#!/bin/bash
set -e

echo "Running migrations..."
gosu www-data python manage.py migrate
