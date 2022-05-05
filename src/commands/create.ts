import { exec } from 'child_process'
import yargs, { CommandModule } from 'yargs'

const create: CommandModule = {
  command: 'create [name]',
  describe: 'Create a new project',
  builder: { name: { type: 'string' } },
  handler: args => {
    if (!args.name) {
      yargs.showHelp()
      return
    }
    console.log(`Alright! Let's create your ${args.name} project:`)
    exec('ls -lh', (error, stdout, stderr) => {
      if (error) {
        console.error(error)
        process.exit(1)
      }

      if (stderr) {
        console.error(`Oups! Something went wrong`)
        console.error(stderr)
        process.exit(1)
      }

      if (stdout) console.log(stdout)
    })
  }
}

export default create
