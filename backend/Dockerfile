FROM python:3.6

WORKDIR /app/backend

# Intall python dependecies
COPY requirements.txt /app/backend
RUN pip3 install --upgrade pip -r requirements.txt

ENV GOSU_VERSION 1.11

RUN curl -sL https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-amd64 > /usr/local/bin/gosu \
 && chmod +x /usr/local/bin/gosu

# Add the source code
COPY . /app/backend

RUN mv cmd/*.sh /usr/bin/ && \
  rm -rf cmd

# Expose port 800
EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
