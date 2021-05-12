import {reducer} from "./Counter";

test('reducer should work', () => {

    const incCount = reducer({count: 0}, {type: 'increment'})
    const decCount = reducer({count: 0}, {type: 'decrement'})

    expect(incCount).toEqual({count: 1})
    expect(decCount).toEqual({count: -1})
})