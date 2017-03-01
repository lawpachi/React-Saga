/**
 * Created by shenlu on 17/3/1.
 */
import {handleActions} from 'redux-actions'
const initialState = 0


export default handleActions({
    'async add btn'(state, action) {
        return  action.payload
    },
    'async cancle btn'(state, action) {
        return  0
    },
},initialState)