/**
 * Contains the initialization code which either:
 *    1. Tells footwork where assets are located.
 *    2. Loads them via RequireJS and registers them with footwork ahead of time (ie: if you want to be able to optimize it into the final build)
 */
define(["footwork", "router",
  "component/navigation/navigation", "text!component/navigation/navigation.html"],
  function(fw, router,
    navigation, navigationTemplate) {

    fw.router.register('router', router);

    fw.components.register('navigation', {
      viewModel: navigation,
      template: navigationTemplate
    });

    fw.components.registerLocation('subreddit', 'component/', true);
    fw.components.registerLocation('subreddit-post', {
      template: 'component/subreddit/'
    });

    fw.outlet.registerViewLocation(/.*-page/, '../pages/');
  }
);
