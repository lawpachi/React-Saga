/**
 * Created by shenlu on 17/3/1.
 */
import {handleActions} from 'redux-actions'
const initialState = 0


export default handleActions({
    'add count btn'(state, action) {
        return  state + 1
    },
    'cut count btn'(state, action) {
        return  state - 1
    },
},initialState)