test('2 object equal', () => {
    let object_1 = {
        "name": "khoa"
    }
    let object_2 = {
        "name": "khoa"
    }

    // expect(object_1 === object_2).toBeTruthy()
    expect(object_1).toEqual(object_2)
})