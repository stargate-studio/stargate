import { updateAvailable, startUpdateFromUrl } from 'modules/update'
import broker from 'modules/broker'
import Timer from 'timer'

broker.on(`/update`, startUpdateFromUrl)

Timer.repeat(broker.keepAlive, 12000)
