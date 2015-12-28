/**
 * Contains the initialization code which either:
 *    1. Tells footwork where assets are located.
 *    2. Loads them via RequireJS and registers them with footwork ahead of time (ie: if you want to be able to optimize it into the final build)
 */
define(["footwork"],
  function(fw) {
    fw.router.registerLocation('Router', 'Router.js');

    fw.components.registerLocation('navigation', {
      viewModel: 'component/navigation/',
      template: 'component/navigation/'
    });

    fw.outlet.registerViewLocation(/.*-page/, '../pages/');
  }
);
