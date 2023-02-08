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
ENV PORT=80

# RUN apk add --no-cache nginx wget

RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"

RUN docker-php-ext-install pdo_mysql mbstring zip

WORKDIR /app

COPY . /app

RUN composer install --no-dev

EXPOSE 80

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
