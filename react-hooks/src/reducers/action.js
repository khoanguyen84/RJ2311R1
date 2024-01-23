// bước 2: tạo ra các action => action creator (hàm tạo ra action)
export const INCREMENT = 'count/increment'
export const DESCREMENT = 'count/descrement'

//action creator
export const decrement = (data) => {
  return {
    type: DESCREMENT,
    payload: data
  }
}

export const increment = (data) => {
  return {
    type: INCREMENT,
    payload: data
  }
}