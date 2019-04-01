//import { updateAvailable, startUpdateFromUrl } from 'modules/update'
//import Broker from 'modules/broker'

function main() {
  //if (updateAvailable()) {
  //  updateRemoteState({ state: 1 })
  //  updateFromUrl(updateURL)
  //}
  trace('start!')
  try {
   require('app/main')
  } catch (error) {
    trace(error)
    //updateRemoteState({ state: -1, startError: error })
  }
}

main()
