import ArrayBufferConverter from '../src/ArrayBufferConverter';
import { getBuffer } from '../src/getBuffer'; // Функция getBuffer из задания

describe('ArrayBufferConverter', () => {
  test('convert ArrayBuffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should throw error if buffer is not loaded', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow('Buffer not loaded');
  });
});
