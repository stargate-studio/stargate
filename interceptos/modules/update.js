import OTA from "esp32/ota"
import {Request} from "http"

let ota = new OTA

export function startUpdateFromUrl(url) {
  let request = new Request({host: url, path: "/firmware.bin"})
  request.callback = function(message) {
    if (4 == message) {
      let bytes = this.read(ArrayBuffer)
      trace(bytes.byteLength, "\n")
      ota.write(bytes)
    }
    if (5 == message) {
      trace(`\n\nTransfer complete.\n`);
      ota.complete();
    }
  }	
}

export function updateAvailable() {
  //use broker to check for a update?
  // creve message event monitor, send question and wait for answer?
  // we need to know what version are we in.. state management? something fixed and the code?
}

export default ota
