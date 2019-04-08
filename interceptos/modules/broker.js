import Client from "mqtt";
import EventEmitter from "eventemitter"

const client = new Client({host: "broker.hivemq.com", port: 1883, id: "myclient"});
const emitter = EventEmitter()

client.onReady = () => {
  client.subscribe("/update")
}

client.onMessage = (t, b) => {
  emitter.emit(t.split(`/`)[1], b)
}

client.onClose = () => {
  trace(`brokerdown\n`)
}

export default emitter
