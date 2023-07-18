// receivesAFunction(callback)(
function receivesAFunction(callback) {
  return callback();
}

// returnsANamedFunction()
function returnsANamedFunction() {
  return function namedFunction() {};
}

// returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
  return function () {};
}
