class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      if (!this.buffer) {
        throw new Error('Buffer not loaded');
      }
      const view = new Uint16Array(this.buffer);
      return String.fromCharCode(...view);
    }
  }
  
  export default ArrayBufferConverter;
  