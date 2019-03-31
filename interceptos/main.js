import Update from 'modules/update'
import Broker from 'modules/broker'

function updateAvailable() {
  //checks for update
}

function main() {
  if (updateAvailable()) {
    Broker.updateDeviceState({ state: 1 })
    Updater.updateFromUrl(updateURL)
  }
  try {
   require('app/main')
  } catch (error) {
    Broker.updateDeviceState({ state: -1, startError: error })
  }
}
