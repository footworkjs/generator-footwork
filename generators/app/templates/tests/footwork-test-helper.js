function makeTestContainer(theFixture) {
  var $container = $('<div/>');
  
  $container.append(theFixture);
  $(document.body).append($container);
  
  return $container.get(0);
}