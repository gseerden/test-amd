define('MyHelloWorldModule', [], function () {
  console.log('HelloWorld.js: 2', 'from amd module');
  
  return {
    hello: function () {
      console.log('HelloWorld.js: 6', 'world');
    }
  };
});
