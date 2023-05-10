# Reef CrowdSale Backend

Backend APIs and database for storing the created IDO's


### Steps to setup this project.

The service is developed using [NestJS](https://nestjs.com/).

- Clone Project Codebase

```
git clone https://github.com/cryption-network/reef-crowdsale-backend.git
```

Add a .env file in root directory. Duplicate the contents of `.env-dev` file present in the same directory and update relevant fields.

- Install dependencies

```shell script
yarn
```

The following variables in the .env file need to be updated/checked for running the service -

```
NODE_ENV=development
NODE_PORT=3000
DB_USERNAME=postgres
DB_PASSWORD=password
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres
DB_SCHEMA=public
DB_SYNCHRONIZATION=false
PASSWORD_SALT=
PASSWORD_HASH=
ADMIN_USERNAME=
```

- Start the service

```shell script
yarn run start:dev
```


These credentials are private and should be obtained through communication with the Cryption Team.
All the APIs are authenticated by Basic Authentication so make sure to pass the correct username and password while sending the request.


### APIs

Postman collection and all API information is documented [here](https://documenter.getpostman.com/view/16998838/2s93Xwyj51)
