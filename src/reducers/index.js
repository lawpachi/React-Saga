/**
 * Created by shenlu on 17/2/28.
 */
import { combineReducers } from 'redux'

import counter from './counter'
import async from './async'
export default combineReducers({
    counter,
    async
})