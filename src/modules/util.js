import fs from 'fs';
import { spawn } from 'child_process';

export const mkdir = (path) => {
    fs.mkdir(path, (err) => {if (err) throw err});
};

export const appendFile = (path, content='') => {
    fs.appendFile(path, content, (err) => {
        if (err) throw err;
        console.log(`Arquivo criado com sucesso em ${path}`);
    });
};

export const execCommand = (command, ...args) => {
    const exec = spawn(command, args);
};