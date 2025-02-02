#!/usr/bin/env node

const { Command } = require('commander');
const cli = new Command;

cli.name('simply-cli')
  .description("The Simply Framework cli!");

cli.command('init')
  .action(() => {
    console.log("Olá simply-cli! Iniciando...");
  });

cli.parse();