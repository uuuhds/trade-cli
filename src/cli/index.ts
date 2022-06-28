import { program } from 'commander';
import pkg from '../../package.json';
import { lint, kill } from '../commands';

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .option('-d, --debug', 'Whether to enable debugging mode', false)
  .description('A cli tool for ay tech')
  .version(pkg.version);

program
  .command('kill')
  .description('Kill process running on given port')
  .action(kill);

program.command('lint').description('Add lint function').action(lint);

program.parse(process.argv);
