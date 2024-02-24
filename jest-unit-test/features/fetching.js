async function fetchUserList(){
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/users')
    let data = await res.json()
    return data
}


module.exports = {
    fetchUserList
}