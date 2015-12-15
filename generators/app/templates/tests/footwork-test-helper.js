/**
 * Helper which makes a new DOM node that we can use to put our test fixture into. Once created it is inserted into the DOM and returned.
 * @param  {mixed} theFixture The fixture
 * @return {DOMNode}          The generated DOM node container
 */
function makeTestContainer(theFixture) {
  var $container = $('<div/>');
  
  $container.append(theFixture);
  $(document.body).append($container);
  
  return $container.get(0);
}