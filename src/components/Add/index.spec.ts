import { add } from './'

describe('Add Test Suite', () => {

    test('should calculate factorial of one number properly', () => {
        expect(
            add.add(4, 3)
        ).toBe(24)
    })

})
