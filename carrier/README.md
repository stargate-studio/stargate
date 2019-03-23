# Stargate Carrier

The Carrier is a docker image that provides useful services to a fleet of IoT.

### Comunication Service
Provides real-time, low-data comunication between the Carrier and the fleet.

Possible Brokers implementations to use:
- [Mosca.js](https://github.com/mcollina/mosca)
- [Mosquitto](https://mosquitto.org)
- [HiveMQ](https://www.hivemq.com)

### Build Service
Builds new firmware images and injects interceptOS when new code is available. The fleet will then be notified of new updates using the Communication Service.

### Monitor Service
Will log and keep track of the state of the fleet (power, current build, time online and stuff) and provide base control like rebooting.

States to track:
- Connection to Carrier
- Application (Running, updating, rebooting)
- Current Build

Actions to take:
- Reboot
- Rollback(?)

