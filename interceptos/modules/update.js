import OTA from "esp32/ota"
import {Request} from "http"

let ota = new OTA
let request = new Request({host: "diogo.velabikes.com.br", path: "/firmware.bin"});
request.callback = function(message) {
    trace(message)
	if (4 == message) {
		let bytes = this.read(ArrayBuffer);
		trace(bytes.byteLength, "\n");
		ota.write(bytes);
	}

	if (5 == message) {
		trace(`\n\nTransfer complete.\n`);
		ota.complete();
	}
}

export default ota