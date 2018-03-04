const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const appTitle = "\n _      ____  _      _  _____  ____  ____    _     ____  ____ \n" +
"/ \\__/|/  _ \\/ \\  /|/ \\/__ __\\/  _ \\/  __\\  / \\   /  _ \\/  _ \\\n" +
"| |\\/||| / \\|| |\\ ||| |  / \\  | / \\||  \\/|  | |   | / \\|| | //\n" +
"| |  ||| \\_/|| | \\||| |  | |  | \\_/||    /  | |_/\\| |-||| |_\\\\\n" +
"\\_/  \\|\\____/\\_/  \\|\\_/  \\_/  \\____/\\_/\\_\\  \\____/\\_/ \\|\\____/\n";

console.log(appTitle);

var interval = setInterval(showProgress, 2000);
var counter = 0;

function showProgress() {
  process.stdout.write("TEST " + counter++ + "%\r");
}

console.log("\n\n\nWaiting until exit...\n\nPress CTRL+C twice or more to exit.");

rl.on('close', () => {
  console.log('Have a great day!');
  clearInterval(interval);
  process.exit(0);
});