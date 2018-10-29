# ngx-foundation Starter Kit (Angular 7)

A Starter Kit for ngx-foundation that uses Angular 7, the latest stable version of Foundation for Sites using the XY Grid and SCSS by default and ngx-foundation. The starter kit contains all of the basic assets to get your SPA up and running quickly.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.X.X.


## Table of contents
1.  [Getting Started](#getting-started)
2.  [Install Angular CLI Globally and Packages](#install-angular-cli-globally-and-packages)
3.  [Imported ngx-foundation Modules](#imported-ngx-foundation-modules)
4.  [Development Server](#development-server)
5.  [API and Examples](#api-and-examples)
6.  [Code Scaffolding](#code-scaffolding)
7.  [Stylesheets and Assets](#stylesheets-and-assets)
8.  [SCSS Variables](#scss-variables)
9.  [Optional What-input](#optional-what-input)
10. [Build and Tests](#build-and-tests)
11. [Help](#help)
12. [License](#license)

## Getting Started

cd to the directory that you want to install this starter kit to, then do a git clone:

`git clone https://github.com/nthompson777/ngx-foundation-starterkit`

Then rename your project folder.

## Install Angular CLI Globally and Packages 

Run `yarn global add @angular/cli` or `npm i -g @angular/cli`

### Install Packages

Simply run `yarn` or `npm install`

If you do not already have Yarn installed, install it globally [here](https://yarnpkg.com/en/docs/install).

### Imported ngx-foundation Modules

All ngx-foundation components are imported by default and are globally available in your project: `/src/app/shared/ngx-foundation.module.ts`. Remove or comment out the modules that you do not need.  

```
import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  OffcanvasModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';
```

If you are implementing Lazy Loading in your project you will need to remove `import { NgxFoundationModule } from './shared/ngx-foundation.module';` located in `/src/app/app.module.ts` and then import whatever modules you need for each component in your route.

## Development Server

Run `yarn start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API and Examples

Visit the [ngx-foundation](https://ngxfoundation.com) site to see examples with extensive code snippets. 

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Stylesheets and Assets

The main stylesheet `/src/styles.scss` contains all of the needed base imports. All other stylesheets are located in the assets directory: `/src/assets/scss`. All Foundation components and the Motion UI Sass Library are imported by default, so be sure to comment out any unneeded Foundation components that you're not using in your project to keep your stylesheet file size smaller. 

### SCSS Variables

Add your own unique styling by changing the variables in `/src/assets/scss/_settings.scss`. This overrides the Foundation variables without having to edit the Foundation for Sites settings source file which allows for a near seemless upgrade when updating Foundation.  
### Optional What-input

`what-input.js` is imported as a dependency and can be implemented by adding it to the `scripts` array located in the `/angular.json` file.
`"scripts": [
    "./node_modules/what-input/dist/what-input.min.js"
  ]`

Be sure to add it to both "build" and "test".

## Build and Tests

Run `yarn build` or  `ng build` to build your project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Help

Visit the [ngx-foundation](https://ngxfoundation.com) site to see examples with extensive code snippets.

Reach out to me via Twitter: [@nthompson777](https://twitter.com/nthompson777)

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

MIT
