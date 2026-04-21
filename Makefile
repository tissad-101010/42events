# =========================
# VARIABLES
# =========================

DOCKER=podman

COMPOSE=$(DOCKER) compose

FRONTEND=frontend
BACKEND=backend
NGINX=nginx


# =========================
# GLOBAL
# =========================

up:
	$(COMPOSE) up --build

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) down && $(COMPOSE) up --build

logs:
	$(COMPOSE) logs -f

ps:
	$(COMPOSE) ps


# =========================
# INDIVIDUAL SERVICES
# =========================

up-frontend:
	$(COMPOSE) up --build frontend

up-backend:
	$(COMPOSE) up --build backend

up-nginx:
	$(COMPOSE) up --build nginx


# =========================
# STOP INDIVIDUAL SERVICES
# =========================

stop-frontend:
	$(COMPOSE) stop frontend

stop-backend:
	$(COMPOSE) stop backend

stop-nginx:
	$(COMPOSE) stop nginx


# =========================
# REBUILD SPECIFIC SERVICES
# =========================

build-frontend:
	$(COMPOSE) build frontend

build-backend:
	$(COMPOSE) build backend

build-nginx:
	$(COMPOSE) build nginx


# =========================
# CLEAN
# =========================

clean:
	$(COMPOSE) down --volumes --remove-orphans

fclean: clean
	$(DOCKER) system prune -af
	$(DOCKER) volume prune -f


# =========================
# DEV MODE (OPTIONNEL)
# =========================

dev:
	$(COMPOSE) up frontend backend


# =========================
# HELP
# =========================

help:
	@echo "Available commands:"
	@echo "  make up              -> build + start all services"
	@echo "  make down            -> stop all services"
	@echo "  make restart         -> restart full stack"
	@echo "  make logs            -> follow logs"
	@echo "  make up-frontend     -> start frontend only"
	@echo "  make up-backend      -> start backend only"
	@echo "  make up-nginx        -> start nginx only"
	@echo "  make clean           -> remove containers + network"
	@echo "  make fclean          -> full cleanup (dangerous)"

.PHONY: up down restart logs ps up-frontend up-backend up-nginx stop-frontend stop-backend stop-nginx build-frontend build-backend build-nginx clean fclean dev help