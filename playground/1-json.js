const fs = require('fs');
const path = require('path');

const filepath = path.join(path.dirname(process.mainModule.filename), '1-json.json');
const dataJsonBuffer = fs.readFileSync(filepath);
const dataJsonString = dataJsonBuffer.toString();
const data = JSON.parse(dataJsonString);

console.log(data);
data.name = data.name+'1';
data.age = data.age+'1';
console.log(data);

fs.writeFileSync(filepath, JSON.stringify(data));