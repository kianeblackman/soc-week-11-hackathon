# Room 10 Week 11 Hackathon (Backend)

This repository will act as an API to interact with a database that stores info about
films you have favourited.

## Authors

- [jyotshnacs](https://www.github.com/jyotshnacs)
- [Elspeth-57](https://www.github.com/Elspeth-57)
- [kianeblackman](https://www.github.com/kianeblackman)

## Tech Stack

**Server:** Node, Nodemon, Express, Postgres (PG), Morgan, CORS, Dotenv

## Deployment

This project is deployed at ...

```bash
  https:// ...
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/kianeblackman/soc-week-11-hackathon-backend.git
```

Install dependencies

```bash
  npm install
```

set up the database

```bash
  npm run db-reset
```

Start the development server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

## API Reference

#### Get all favourite films from the list

```http
  GET /favourites
```

#### Add a new film to the favourite list

```http
  POST /favourites
```

| Body                                                       | Type     | Description                       |
| :--------------------------------------------------------- | :------- | :-------------------------------- |
| `{title, rated, releaseDate, director, genre, imdbRating}` | `object` | **Required**. Info about new film |

#### Remove a film from the favourite list

```http
  DELETE /favourites/:id
```

| Param | Type     | Description                             |
| :---- | :------- | :-------------------------------------- |
| `id`  | `number` | **Required**. ID for film being deleted |
