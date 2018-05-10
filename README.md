# mongoose & express api rest

This is an example of single api rest for user registration

__Prerequisites__ : you must have `nodejs ` and `mongodb` installed, if not use `nvm`.

Install dependencies :


```shell
# Use npm
npm install
# Or use yarn
yarn install
```

Run the api:

```shell
# Use npm
npm start
# Or use yarn
yarn start
```

By the moment api only has a single endpoint : `/api/v1/users` under `3000` port.
Checkout the requests using `postman` and importing `postman_collection.json` file.

## To do list

* [x] Example of schemas and models using mongoose and express
* [x] Example of hooks with schemas
* [x] Create a log entrie with morgan and fs
* [x] File structure separating controllers, urls, schemas and models
* [x] CRUD for users
* [x] Encription of user's password using bcrypt
* [ ] Add static files settings & endpoint to serve it
* [ ] Add multipart support
* [ ] Add jwt auth
* [ ] Add protected routes (auth needed)
* [ ] Add i18n support for api responses
* [ ] Add cors support
* [ ] Change settings depending of env vars
* [ ] Add unit test
