# angular-skeleton

[Standard Angular AIT](https://docs.google.com/document/d/190QzPEucWlT9frHFbWFYy-pjFKmC5P8eI72qZqwtXhs/edit?usp=sharing)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Run Project with Docker

### Requirement
    - docker installed in local machine
    - docker compose
    - HDD free space 500MB
    - 2GB free RAM

### Run Docker Development mode

#### Run the project
```
$: docker-compose -f docker-compose-dev.yml up
```
or
```
$: docker-compose -f docker-compose-dev.yml up -d
```
open in your browser in `http://localhost:4200`

#### stop the dev container
```
$: docker-compose -f docker-compose-dev.yml down
```

### Deploying with docker 
```
$: docker-compose up -d
```
the project running on port `8080`




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

