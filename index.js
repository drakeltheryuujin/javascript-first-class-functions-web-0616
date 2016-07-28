function receivesAFunction(callback) {
  callback()
}

receivesAFunction(function() {
  console.log("execute")
})

function returnsANamedFunction() {
  return function namedfunction() {
    console.log("execute")
  }
}

function returnsAnAnonymousFunction() {
  return function(){
    console.log("execute")
  }
}
