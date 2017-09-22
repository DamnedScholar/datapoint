import environment from './environment';
import { CSRFInterceptor, LoggerInterceptor } from '../node_modules/aurelia-sails-socket-client/dist/aurelia-sails-socket-client';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-dragula')
    // .plugin('aurelia-sails-socket-client', (sails, io) => {
    //   sails.configure(x => {
    //     x.withBaseUrl('/api/v1');
    //
    //     // Example for CSRFInterceptor - if you are using Sails CSRF protection
    //     x.withInterceptor(new CSRFInterceptor('/csrfToken', sails));
    //     x.withInterceptor(new LoggerInterceptor());
    //   })
    // });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
