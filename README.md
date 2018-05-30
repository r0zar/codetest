# Codetest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Developer Notes

The only change made from the generated code was the addition of the `src/app/mbx.service.ts` file, which utilizes the [build-url](https://www.npmjs.com/package/build-url) npm module to create request urls. The base url is intentionally left blank to be set through environment variables or some other form of config.

This problem was solved from the perspective of a user, in this case a developer consuming the url builder service. My goals were to keep the url service as intuitive as possible, easily extendible, and minimally abstracted. Extending the service is straightforward as responsibility falls into the scope of `url-builder`, since function parameters for `mbx.get(...)` are passed directly into the module's function.

My next steps would be to extend the service to return rxjs observables for subscription.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
