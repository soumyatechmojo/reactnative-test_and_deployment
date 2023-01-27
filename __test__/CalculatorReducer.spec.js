import calculatorReducer from "../src/reducer/CalculatorReducer"
import { ADD_INPUTS,SUBTRACT_INPUTS } from "../src/action/Types"

describe('Test calculatorReducers', ()=>{
    it('Reducer for ADD_INPUT',()=>{
        let state = {output:0}

        state = calculatorReducer(0,{type:ADD_INPUTS,payload:500})
        expect(state).toEqual({output:500})
    })
});


it('Reducer for SUBTRACT_INPUT',()=>{
    let state = {output:0}

    state = calculatorReducer(0,
        {type:SUBTRACT_INPUTS,payload:10})
    expect(state).toEqual({output:10})
});
