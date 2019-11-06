FROM python:3.6

WORKDIR /app/backend

# Intall python dependecies
COPY requirements.txt /app/backend
RUN pip3 install --upgrade pip -r requirements.txt

# Add the source code
COPY . /app/backend

# Expose port 800
EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
