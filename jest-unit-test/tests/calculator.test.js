const { sum, times } = require('../features/calculator')

test('should 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
})

test('should 5 + 5 > 9', () => {
    expect(sum(5, 5)).toBeGreaterThan(9)
})

test('should be NaN', () => {
    expect(sum()).toBeNaN()
})

test('should 0.2 + 0.3 = 0.5', () => {
    expect(sum(0.2, 0.3)).toBeCloseTo(0.5)
})

test('should 4 x 5 = 20', () => {
    expect(times(4, 5)).toBe(20)
})

test('sum should have returned', () => {
    let haveReturned = jest.fn(() => sum(1, 1))
    haveReturned()
    expect(haveReturned).toHaveReturned()
})
