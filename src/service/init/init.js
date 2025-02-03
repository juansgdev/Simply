import { mkdir, appendFile } from '../../modules/util.js';
import { generatePackageJson, html } from '../files-content/init/init-content.js';

export const initSimplyProject = (projectName) => {
    mkdir(projectName);

    appendFile(`${projectName}/index.html`, html(projectName));
    appendFile(`${projectName}/global.css`);
    appendFile(`${projectName}/main.js`);
    appendFile(`${projectName}/package.json`, generatePackageJson(projectName));
};