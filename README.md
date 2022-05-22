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

### 37. Useful Resources & Lings

Angular Material Setup Docs: https://material.angular.io/guide/getting-started
Angular Material Component Docs: https://material.angular.io/components/categories
Angular Material Github Repo: https://github.com/angular/material2
@angular/flex-layout Docs: https://github.com/angular/flex-layout
Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Flexbox Video: https://academind.com/learn/css/understanding-css/flexbox-basics-container

## Section 04: Diving Deeper into Angular Material

### 44. Splitting the Navigation Into Components

```
ng g c navigation/header --module app.module
ng g c navigation/sidenav-list --module app.module
```

## Section 05: Working with Data and Angular Material

### 57. Important: RxJS 6

```
npm install --save rxjs-compat
```

## Section 06: Using Angularfire and Firebase

### 80. Getting Started with Firebase

* Create new Firebase project `ng-fitness-tracker`:
https://console.firebase.google.com/u/0/project/ng-fitness-tracker-d0e4e/overview

### 83. Dive into Firebase

* Create Firebase Database (Cloud Firestore):
https://console.firebase.google.com/u/0/project/ng-fitness-tracker-d0e4e/firestore/data/~2F

* Cloud Firestore Data Model - Documentation:
https://firebase.google.com/docs/firestore/data-model

### 84. Listening to Value Changes (of Firestore)

```
# The following did not work
# npm install angularfire2 firebase --save

# Use official github page:
# https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
ng add @angular/fire

```

* AngularFire Doc:
https://github.com/angular/angularfire

* Documents in AngularFirestore:
https://github.com/angular/angularfire/blob/master/docs/firestore/documents.md


## Section 07: Optimizing the App

### 111. Wrap Up

* Test build for production

```
ng build --prod
```

## Section 08: Using NgRx for State Management

### 115. NgRx Core Concepts - A First Example

```
npm install --save @ngrx/store@~12.2
```

## Section 09: Deploying the App

### 131. Introduction & Preparation

``` 
ng build --prod
```

### 132. Deploying the App to Firebase Hosting

* Install Firebase CLI

``` 
npm install -g firebase-tools

firebase login
firebase init
# Select 'Hosting' (hit Space and Enter)
# Choose ng-fitness-tracker
? What do you want to use as your public directory? (public) dist
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y

firebase deploy

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/ng-fitness-tracker-d0e4e/overview
Hosting URL: https://ng-fitness-tracker-d0e4e.web.app
```

