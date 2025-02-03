import { mkdir, appendFile, execCommand } from '../../modules/util.js';
import { generatePackageJson, html } from './filesContent.js';

export const initSimplyProject = (projectName) => {
    mkdir(projectName);

    appendFile(`${projectName}/${projectName}.html`, html);
    appendFile(`${projectName}/${projectName}.css`);
    appendFile(`${projectName}/${projectName}.js`);
    appendFile(`${projectName}/package.json`, generatePackageJson(projectName));
};