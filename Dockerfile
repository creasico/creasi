FROM php:8.2-fpm

ARG NODE_VERSION=18

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    wget \
    mariadb-client \
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && apt-get update \
    && apt-get install -y yarn

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PORT=80
ENV HOST=0.0.0.0

# RUN apk add --no-cache nginx wget

RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"

RUN docker-php-ext-install pdo_mysql mbstring zip

ENV DB_CONNECTION=mysql
ENV DB_HOST=mysql
ENV DB_PORT=3306
ENV DB_DATABASE=creasi
ENV DB_USERNAME=creasi
ENV DB_PASSWORD=password

WORKDIR /app

COPY . /app

RUN composer install --no-dev

RUN npm install

RUN npm run build

EXPOSE 80

# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
