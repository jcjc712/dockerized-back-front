.PHONY: all test clean

DOCKER_COMPOSE_PROJECT    ?= dockerized-back-front

define image-exec
	docker exec \
		-it $(DOCKER_COMPOSE_PROJECT)_backend_1 \
			sh -c '$(1)'
endef

all: build

backend-image:
	docker build \
	    -t backend:latest \
	    backend

frontend-image:
	docker build \
	    -t frontend:latest \
	    frontend

docker-up:
	docker-compose \
		-p $(DOCKER_COMPOSE_PROJECT) \
		-f docker-compose.yml \
		up

# First migration
docker-migrate-up:
	$(call image-exec,./cmd/migrate.sh)

# Run tests
docker-test:
	$(call image-exec,./manage.py test --parallel)

build: backend-image frontend-image

start: build docker-up
