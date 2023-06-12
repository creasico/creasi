FROM php:8.2-fpm

ARG NODE_VERSION=18
ARG user
ARG uid

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
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && apt-get update \
    && apt-get install -y yarn

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PORT=8080
ENV HOST=0.0.0.0

ENV DB_CONNECTION=mysql
ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_DATABASE=creasi
ENV DB_USERNAME=creasi
ENV DB_PASSWORD=password

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www

USER $user


# COPY . /app

# RUN composer install --no-dev

# # populate database and seeder
# RUN php artisan migrate --seed --force

# RUN npm install

# RUN npm run build

# EXPOSE 8080

# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
