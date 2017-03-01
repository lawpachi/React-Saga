import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { counter, dispatch, async} = this.props
    return (
        <div>
           Clicked : { counter } times
            {' '}
            <button onClick={() => {
                dispatch({type:'add count btn',payload:counter})
            }}>+</button>
            {' '}
            <button onClick={() => {
                dispatch({type:'cut count btn',payload:counter})
            }}>-</button>
            {' '}
            <button onClick={() => {
                async ? dispatch({type:'CANCLE_COUNT_ASYNC',payload:5}) :
                dispatch({type:'ADD_COUNT_ASYNC',payload:5})
            }}> {async? async+'秒后加1' :'5秒后加1'} </button>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter:state.counter,
        async: state.async
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
