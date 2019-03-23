
# Stargate
IoT Fleet on JS

A tool for easy developing, testing, deploy and controll fleets of remote devices, using JS.

The project is divided in 3 main parts:
- The web app, codenamed Stargate, that will manage Users, Projects, and interface users with the rest of the system
- The device management system, condemned Carrier, it provides build, update and communication services for a project.
    - Build service: will build device images and provide them for the Carrier update service.
    - Communications service: will monitor device status and handle update notifications.
    - Update service: will provide a HTTPS service to provide update builds for the devices
- The device firmware called interceptOS, that will contains the base code for OTA updates, communication for the devices (interceptors)

The intention is initially support just ESP32 since is the most used IoT platform in the maker communitty and because is already supported in the amazin moddable.js framework.

Usage
=========

User logs on the Stargate throu a web interface, creates a Project and configures a git repository. The Stargate the creates Carrier instance.

The Carrier build system will receive webhooks from github and build interceptOS images from the user defined repository. Those images will then be available for interceptors Over-the-air updates.

When asked to add a device the user is asked to provided a wifi credential. User is then provided then with a initial build, this build is configured with the wifi credentials and carrier certs, but no user code, just the base interceptOS code.

The user flashes the initial build, that will connect to the carrier, verify its indentity and download the first build.

Stargate
----------
Handle user interface, project creation and carrier deployment.
- Next + GraphCMS[?]
- Something to handle carrier deploy [aws, googl, do, now]

Carrier
----------
The center point of comunication for interceptors running interceptOS.
- Mosca for MQTT service
- express for HTTPS service (S3?)
- something simple to handle storage device status, redis ?

InterceptOS
-----------
The Main module to handle communicatin with the carrier and starting OTA updates when notified by it.
- Moddable.js
- ESP-IDF

# References

Balena: https://balena.io
Mongoose: https://mongoose-os.com
Thinx: https://thinx.cloud
