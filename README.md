#Twitter Clone

Twitter Clone using Ruby on Rails, React, Flux, ES6, and PostgreSQL.

## Features

* Compilation with Webpack
* Wrote JavaScript 2015 with Babel compiler
* React Components in ES6
* Flux Architecture
* Single Page React Application using React DOM, React Router, and History

## Live Demo

See project running here:

> https://murmuring-refuge-2783.herokuapp.com

## Code Architecture

React/Flux files are under app/assets/frontend

## To Run

In project folder in Terminal, run:

> bundle install

> npm install

> rake db:migrate

> rails s -p 4003

Go to "localhost:4003" in your favorite browser. I don't like using port 3000 because most rails projects use 3000.

> webpack -w -d

to make changes and have webpack remake your bundle.js

## Walkthrough

1. Register an account through "Sign Up"

2. Sign In and click your email on the top-right corner

3. Update with your name

4. Post a Tweet

5. Click "Who to Follow"

6. Follow other users

## Built Using

### Technology
* Ruby on Rails

 * Devise

* React ES6

 * React Router

     * History

 * React DOM

* Flux
* PostgreSQL

### Tools

* Webpack
* Babel
* Events
