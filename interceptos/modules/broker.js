import Client from "mqtt";
import EventEmitter from "eventemitter"

const client = new Client({host: "broker.hivemq.com", port: 1883, id: "myclient"});
const emitter = EventEmitter()

client.onReady = () => {
  trace(`brokerup`)
  client.subscribe("/update")
}

client.onMessage = emitter.emit

client.onClose = () => {
  trace(`brokerdown\n`)
}

export default emitter
