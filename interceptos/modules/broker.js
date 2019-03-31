import Client from "mqtt";
trace('mqtt')
let client = new Client({host: "broker.hivemq.com", port: 1883, id: "myclient"});

client.onReady = () => {
    trace('connection up\n'); client.subscribe("/foo")
    client.publish("/foo", "bar")
}
client.onMessage = (t, b) => { trace(`received message on ${t} with body ${String.fromArrayBuffer(b)}\n`) }
client.onClose = () => { trace(`server closed connection\n`) }

export default {}