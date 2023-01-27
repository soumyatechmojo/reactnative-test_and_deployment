import "react-native"
import React from "react"
import Demo from "../../src/component/Demo"


import renderer from 'react-test-renderer'

test('renders correctly',()=>{
    const tree = renderer.create(
        <Demo/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})