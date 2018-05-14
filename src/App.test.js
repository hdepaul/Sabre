import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import { mount, shallow } from 'enzyme';

const initialState = {players:[]}
const mockStore = configureStore()
let store,container,wrapper;

beforeEach(()=>{
	store = mockStore(initialState)
	wrapper = shallow( <Provider store={store}><App /></Provider> )
})

it('renders without crashing', () => {
    expect(wrapper.find(App).length).toEqual(1)
});
