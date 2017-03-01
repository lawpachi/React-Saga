/**
 * Created by shenlu on 17/3/1.
 */
import { take, put, call, fork, cancel} from 'redux-saga/effects'

function* incrementAsync(time) {
        for(let i =0 ;i<time; i++){
            yield new Promise((resolve, reject) => {
                setTimeout(resolve, 1000 )
            });
            yield put({type:'async add btn', payload:time - i -1 })
        }
        yield put({type:'add count btn'})
        yield put({type:'async cancle btn'})
}
function* watchAddAsync() {
    while(true){
        const action = yield take('ADD_COUNT_ASYNC');
        const task = yield fork(incrementAsync, action.payload)
        yield take('CANCLE_COUNT_ASYNC')
        yield cancel(task)
        yield put({type:'async cancle btn'})
    }
}
export default function* rootSaga() {
    yield fork(watchAddAsync)
}