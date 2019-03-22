
# Stargate
IoT Fleet on JS

The project is divided in 3 main parts:
- The web app, codenamed Stargate, that will manage Users, Projects, and interface users with the rest of the system
- The device management system, condemned Carrier, it provides build, update and communication services for a project.
    - Build service: will build device images and provide them for the Carrier update service.
    - Communications service: will monitor device status and handle update notifications.
    - Update service: will provide a HTTPS service to provide update builds for the devices
- The device firmware called interceptOS, that will contains the base code for OTA updates, communication for the devices (interceptors)

The intention is initially support just ESP32 and ES2019 JS but it could be possible to implement support for other systems and boards.

Usage
=========

User logs on the Stargate throu a web interface, creates a Project and configures a git repository. The Stargate the creates Carrier instance.

The Carrier build system will receive webhooks from github and build interceptOS images from the user defined repository. Those images will then be available for interceptors Over-the-air updates.

When asked to add a device the user is asked to provided a wifi credential. User is then provided then with a initial build, this build is configured with the wifi credentials and carrier certs, but no user code, just the base interceptOS code.

The user flashes the initial build, that will connect to the carrier, verify its indentity and download the first build.

Stargate
----------

- Next + GraphCMS[?]
- Something to handle carrier deploy [aws, googl, do, now]

Carrier
----------

- Mosca for MQTT service
- express for HTTPS service
- something simple to handle device status and data, redis ?

InterceptOS
-----------

- Moddable.js
- ESP-IDF
