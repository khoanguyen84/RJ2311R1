const { fetchUserList } = require('../features/fetching')

test('Call user api should have data', async () => {
    let userList = await fetchUserList()
    expect(userList?.length).toBeGreaterThan(0)
})