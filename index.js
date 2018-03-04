const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const appTitle = "\n _      ____  _      _  _____  ____  ____    _     ____  ____ \n" +
"/ \\__/|/  _ \\/ \\  /|/ \\/__ __\\/  _ \\/  __\\  / \\   /  _ \\/  _ \\\n" +
"| |\\/||| / \\|| |\\ ||| |  / \\  | / \\||  \\/|  | |   | / \\|| | //\n" +
"| |  ||| \\_/|| | \\||| |  | |  | \\_/||    /  | |_/\\| |-||| |_\\\\\n" +
"\\_/  \\|\\____/\\_/  \\|\\_/  \\_/  \\____/\\_/\\_\\  \\____/\\_/ \\|\\____/\n";

console.log(appTitle);

// PUT YOUR CODE HERE.
// Give your best :-D

console.log("\n\n\nWaiting until exit...\n\nPress CTRL+C twice to exit.");

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});