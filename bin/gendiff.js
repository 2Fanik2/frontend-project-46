#!/usr/bin/env node
import { program } from 'commander';
program.description('Compares two configuration files and shows a difference.').version('0.8.0');
program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
