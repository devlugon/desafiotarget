function loadScript(scriptName) {

    const existingScript = document.querySelector(`script[src="${scriptName}"]`);
    if (existingScript) {
        document.body.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.src = scriptName;

    document.body.appendChild(script);
}