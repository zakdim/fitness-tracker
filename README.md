# FitnessTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Section 03: Angular Material

### 22. Adding Angular Material to a Project

[Install Angular Material](https://material.angular.io/guide/getting-started)
[Material GitHub](https://github.com/angular/components)


```
# Install Angular Material and Angular CDK
npm install --save @angular/material @angular/cdk

# Animations
npm install --save @angular/animations

# Configure material in app module
...

# Add Gesture Support
npm install --save hammerjs

# Add Material Icons
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

```

### 26. Creating the Course App Structure

```
ng g c auth/signup --module app.module
ng g c auth/login --module app.module
ng g c training --module app.module
ng g c training/current-training --module app.module
ng g c training/new-training --module app.module
ng g c training/past-trainings --module app.module
ng g c welcome --module app.module
```

### 29. Controlling the Layout with @angular/flex-layout

* [Angular Flex Layout - API Documentation](https://github.com/angular/flex-layout/wiki/API-Documentation)
* [Angular Flex Layout - Using Angular CLI](https://github.com/angular/flex-layout/wiki/Using-Angular-CLI)

```
# Install flex-layout
npm install @angular/flex-layout --save
```
