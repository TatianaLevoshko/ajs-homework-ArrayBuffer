import ArrayBufferConverter from './ArrayBufferConverter';
import { getBuffer } from './getBuffer';

const converter = new ArrayBufferConverter();
const buffer = getBuffer();
converter.load(buffer);
console.log(converter.toString());
