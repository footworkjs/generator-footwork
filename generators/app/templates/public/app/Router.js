define(["footwork"],
  function(fw) {
    return fw.router.create({
      namespace: 'Router',
      routes: [
        {
          route: '/',
          title: 'Home',
          controller: function() {
            this.outlet('mainContent', 'index-page');
          }
        }
      ]
    });
  }
);
