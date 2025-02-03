export const html = (projectName) => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>${projectName}</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='global.css'>
</head>

<body>
    <h1>Simply Project!</h1>
    
    <script src='main.js'></script>
</body>
</html>`};

export const generatePackageJson = (projectName) => {
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "",
  "description": ""
}`
};