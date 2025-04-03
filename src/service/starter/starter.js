import { mkdir, appendFile } from '../../modules/util.js';
import { generatePackageJson, html } from '../../modules/files-content/init/init-content.js';

export const initSimplyProject = (projectName) => {
    mkdir(projectName);

    appendFile(`${projectName}/index.html`, html(projectName));
    appendFile(`${projectName}/global.css`);
    appendFile(`${projectName}/main.js`);
    appendFile(`${projectName}/package.json`, generatePackageJson(projectName));
};

export const starter = {
    generateComponent : (componentName) => {
        mkdir(componentName);

        appendFile(`${componentName}/${componentName}.html`);
        appendFile(`${componentName}/${componentName}.css`);
        appendFile(`${componentName}/${componentName}.js`);
    }
};
