import React from 'react';
import renderer from 'react-test-renderer';
import {TODO , List , DONE } from '../../App.jsx';

it("expect to enter value when click enter",()=>{
    let MockState = "";
    const setMockState = (str) => {MockState = str}
    const component = renderer.create(
        <TODO func={setMockState} />,
    );
    let thisComponent = component.toJSON();
    expect(thisComponent).toMatchSnapshot();
})
it("expect to print information from props",()=>{
    const MockInformation = ["first task","second task"];
    const eraseOneLine = () => {}
    const component = renderer.create(
        <List informations={MockInformation} eraseOneLine={eraseOneLine} />
    );
    expect(component.toJSON()).toMatchSnapshot();
})
it("expect to print done task in Done component",()=>{
    const MockInformation = ["first task","second task"];
    const component = renderer.create(
        <DONE done={MockInformation} />
    );
    expect(component.toJSON()).toMatchSnapshot();
})