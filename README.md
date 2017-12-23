# callbackAfterJSAsync
Loads an external JavaScript resource asynchronously and executes a callback function after the resource has been loaded. Can be used when 1. there are dependencies in your function to the external resource (e.g. when using a library) and
2. you want the external file to be loaded asynchronously (non-renderblocking) and
3. you want to make sure that the external resource is loaded before your code is executed.

# Usage
Use the function loadFileAndExecuteFunction to asynchromously load an external JavaScript file and execute a function after the file has been successfully loaded:
scriptPath: Path to the script file, e.g. '//exmaple.com/main.js'
callbackFunction: Name of the callback function, e.g. continue

# Effect
- The external JavaScript file will be loaded asynchronously (ASYNC) when the DOM is loaded (DEFER)
- The callback function will be executed
