const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const appTitle = "\n _      ____  _      _  _____  ____  ____    _     ____  ____ \n" +
"/ \\__/|/  _ \\/ \\  /|/ \\/__ __\\/  _ \\/  __\\  / \\   /  _ \\/  _ \\\n" +
"| |\\/||| / \\|| |\\ ||| |  / \\  | / \\||  \\/|  | |   | / \\|| | //\n" +
"| |  ||| \\_/|| | \\||| |  | |  | \\_/||    /  | |_/\\| |-||| |_\\\\\n" +
"\\_/  \\|\\____/\\_/  \\|\\_/  \\_/  \\____/\\_/\\_\\  \\____/\\_/ \\|\\____/\n";

console.log(appTitle);

const delimiter = ";";

var csv = ["food;qty;prot;fat;carb;sugar;fibre;alc;cal;ed",
"Aal;100;14.0;23.0;0.0;0.0;0.0;0.0;263;2.6",
"Absinth (45% Vol.);100;0.0;0.0;0.0;0.0;0.0;36.0;256;2.6",
"Appenzeller;100;24.0;31.0;0.0;0.0;0.0;0.0;375;3.8"];

var header = csv[0].split(delimiter);

var data = createDataStructure(header);

// create the array of objects
var objects = [];

for (let index = 1; index < csv.length; index++) {
  const values = csv[index].split(delimiter);
  const record = {};
  for (let col = 0; col < header.length; col++) {
    record[header[col]] = values[col];
  }
  objects.push(record);
}

console.log(objects);

console.log("\n\n TO JSON: \n\n");
console.log(JSON.stringify(objects));

function createDataStructure(header) {
  var data = {};
  header.forEach(element => {
    data[element]="2";
  });
  return data;
}

function createEmptyDataStructure(line) {
  var data = {};
  for (let index = 0; index < line.length; index++) {
    const element = "field" + index;
    data[element] = "";
  }
  return data;
}





console.log("\n\n\nWaiting until exit...\n\nPress CTRL+C twice or more to exit.");

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});