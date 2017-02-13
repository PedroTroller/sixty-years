## Requirements

 - docker (and docker-compose)

## Build the frontend

Run `docker-composer up`.

## Deploy with Heroku

You have to create a new Heroku App and to add two build packs (`heroku/nodejs` first and then `heroku/ruby`).

Finally, just use the the Heroku CLI to push your code into your App repository.
