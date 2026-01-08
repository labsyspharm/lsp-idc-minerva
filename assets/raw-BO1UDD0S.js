import { B as BaseDecoder } from "./index-BiIpo5DS.js";
class RawDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return buffer;
  }
}
export {
  RawDecoder as default
};
