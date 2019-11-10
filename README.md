## Dockerized backend with Django and frontend with React

This repo has the common backend and frontend technologies dockerized 
to start a new project without the concerns of installations or
connexion between technologies.

#### Backend
- django
    - djangorestframework
    - djangorestframework-jwt
    - django-cors-headers
- postgres

#### Frontend
- react
    - react-bootstrap
    - axios
    - react-router-dom

> Note: It has CORS integration and jwt for authentication. To test this integration
> the project contains a CheckList app.

## Setup

#### Proxy setup
1. Create a proxy network where the containers will connect
    ```sh
    docker network create proxy
    ```

2. Run jwilder/nginx-proxy container
    ```sh
    docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro --restart=always --name proxy --network proxy jwilder/nginx-proxy
    ```

3. Add the hosts for frontend and backend containers

    3.1 In your console enter to hosts file with write permissions
    ```sh
    nano /etc/hosts
    ```
   
    3.2 Add these two lines

    ```sh
    127.0.0.1       backend.test
    127.0.0.1       frontend.test
    ```

    3.3 Restart the proxy container

    ```sh
    docker restart proxy
    ```
   
4. Build images and run containers
    ```sh
    make start
    ```

5. Finally run the backend migrations
    ```sh
    make docker-migrate-up
    ```

#### Start

```sh
make start
```

#### Testing

```sh
make docker-test
```

## Login view
![Alt text](./log_in.png?raw=true "Log in")

## Checklist view
![Alt text](./check_list.png?raw=true "Check List")
