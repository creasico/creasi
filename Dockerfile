FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    wget

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PORT=8080
ENV HOST=0.0.0.0

# RUN apk add --no-cache nginx wget

RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"

# setup node js source will be used later to install node js
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN ["sh",  "./nodesource_setup.sh"]

RUN docker-php-ext-install pdo_mysql mbstring zip

WORKDIR /app

COPY . /app

RUN composer install --no-dev

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
