import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
// import 'foundation';

export class App {
    configureRouter(config, router) {
      config.title = 'Aurelia';
      config.options.pushState = true;
      config.options.root = '/';
      config.map([
        { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true,
            title: 'Home' },
        { route: 'view', name: 'view', moduleId: './view', nav: true,
            title: 'View' }
      ]);

      config.mapUnknownRoutes('404');

      this.router = router;
    }

    constructor() {
      this.message = 'Hello World!';
    }
}
