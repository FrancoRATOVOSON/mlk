import { CommandModule } from 'yargs'

const add: CommandModule = {
  command: 'add [name]',
  describe: 'Add a dependency to the project',
  builder: { name: { type: 'string' } },
  handler: args => {
    console.log(`You've added ${args.name} to your project`)
  }
}

export default add
