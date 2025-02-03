#!/usr/bin/env node

import { initSimplyProject } from './src/service/init/init.js';
import {Command} from 'commander';
const cli = new Command;

cli.name('simply-cli')
  .description("The Simply Framework cli!");

cli.command('init <projectName>')
  .action((projectName) => {
    console.log("Iniciando projeto com simply-cli! Iniciando...");
    initSimplyProject(projectName);
  });

cli.parse();