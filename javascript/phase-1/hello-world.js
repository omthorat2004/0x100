// JavaScript executes code in a sequential, top-to-bottom order, which makes it look like line-by-line execution,
//  but internally it is not purely interpreted line by line; 
//  when the code runs in a browser like Google Chrome or in Node.js,
//  it is first parsed and then Just-In-Time (JIT) compiled into machine code by the engine (such as V8), 
//  and after that it is executed and optimized at runtime, so overall JavaScript behaves like a hybrid language where execution appears sequential but the underlying process involves compilation and optimization rather than simple interpretation.

// Javascript is JIT compiled by the V8 engine or any other engine
// See this code is not executed in VS code directly if you want to execute you need the node at least in vs code
//without any engine you cant execute code
//remember : node is not compiler its just a runtime
console.log("Hello World")