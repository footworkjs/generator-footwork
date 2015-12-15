/**
 * Contains the initialization code which either:
 *    1. Tells footwork where assets are located.
 *    2. Loads them via RequireJS and registers them with footwork ahead of time (ie: if you want to be able to optimize it into the final build)
 */
define(["footwork"],
  function(fw) {
    fw.viewModel.registerLocation('ExampleViewModel', 'app/viewModel/ExampleViewModel.js');

    fw.components.registerLocation('my-component', {
      viewModel: 'app/component/my-component/',
      template: 'app/component/my-component/'
    });
  }
);
