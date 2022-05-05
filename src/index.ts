#! /usr/bin/env node
import yargs from 'yargs'
import add from './commands/add'
import create from './commands/create'

const argv = yargs
  .usage('usage: $0 <command>')
  .command(create)
  .help()
  .command(add)
  .help()
  .wrap(null)
  .parseSync()

function checkCommands() {
  if (argv._.length < 1) yargs.showHelp()
}
checkCommands()
