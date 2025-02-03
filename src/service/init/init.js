import { mkdir, appendFile } from '../../modules/util.js';
import { generatePackageJson, html } from './filesContent.js';

export const initSimplyProject = (projectName) => {
    mkdir(projectName);

    appendFile(`${projectName}/index.html`, html);
    appendFile(`${projectName}/global.css`);
    appendFile(`${projectName}/main.js`);
    appendFile(`${projectName}/package.json`, generatePackageJson(projectName));
};