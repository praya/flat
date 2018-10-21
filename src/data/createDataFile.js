import * as fs from 'fs';
import generateData from './generateData';

const data = generateData(10, 3, 10);

fs.writeFileSync('./data.json', JSON.stringify(data, void 0, 2));
