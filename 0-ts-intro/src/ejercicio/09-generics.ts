// Generic type, depends on how this is thing used
function whatIsMyType<T>(arg: T) {
  return arg;
}

let imstring = whatIsMyType('Hello world');
let imNumber = whatIsMyType(100);
let imArray = whatIsMyType([1, 2, 3]);
let imExplicit = whatIsMyType<string>("Hello world");