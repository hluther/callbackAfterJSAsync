function loadFileAndExecuteFunction(scriptPath, callbackFunction) {
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', scriptPath);
    scriptTag.setAttribute('async', '');
    scriptTag.setAttribute('defer', '');
    scriptTag.addEventListener('load', callbackFunction, false);
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
}
