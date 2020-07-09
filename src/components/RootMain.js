import React, { Component } from 'react';
// import Index from '../components/Home/Index'
import Main from '../components/Home/Main'
import { Provider } from 'react-redux'
import { createStore }  from 'redux'
import reducer from './Store/reducer'

const store = createStore(reducer);


export class RootMain extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
            )
    }
}

export default RootMain
