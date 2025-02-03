#!/usr/bin/env node

import { initSimplyProject } from './src/service/init/init.js';
import {Command} from 'commander';
const cli = new Command;

cli.name('simply-cli')
  .description("The Simply Framework cli!");

cli.command('init')
  .action(() => {
    console.log("Iniciando projeto com simply-cli! Iniciando...");
    initSimplyProject('test');
  });

cli.parse();