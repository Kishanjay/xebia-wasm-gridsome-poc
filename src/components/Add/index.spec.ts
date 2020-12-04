import { wasmADD } from './'

describe('Add Test Suite', () => {

    test('should calculate factorial of one number properly', () => {
        expect(
            wasmADD.add(4, 3)
        ).toBe(24)
    })

})
