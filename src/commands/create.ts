import { CommandModule } from 'yargs'

const create: CommandModule = {
  command: 'create [name]',
  describe: 'Create a new project',
  builder: {
    name: {
      type: 'string',
      default: 'awesome-app'
    }
  },
  handler: args => {
    console.log(`You created the ${args.name} project`)
  }
}

export default create
