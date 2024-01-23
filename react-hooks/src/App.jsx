import { useReducer } from 'react';
import './App.css'

// bước 1: tạo ra initState
const initState = 0

// bước 2: tạo ra các action => action creator (hàm tạo ra action)
const INCREMENT = 'count/increment'
const DESCREMENT = 'count/descrement'

//action creator
const decrement = (data) => {
  return {
    type: DESCREMENT,
    payload: data
  }
}

const increment = (data) => {
  return {
    type: INCREMENT,
    payload: data
  }
}

// bước 3: tạo reducer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT: {
      return state + Number(action.payload)
    }
    case DESCREMENT: {
      return state - Number(action.payload)
    }
    default: {
      return state
    }
  }
}

//bước 4: sử

function App() {
  const [number, dispatch] = useReducer(reducer, initState)
  return (
    <div className='container w-50'>
      <h1>{number}</h1>
      <div>
        <button className='btn btn-success'
          onClick={() => dispatch(decrement(3))}
        >Decreament</button>
        <button className='btn btn-dark'
          onClick={() => dispatch(increment(5))}
        >Increament</button>

      </div>
    </div>
  )
}

export default App;
// cái gì useState làm được thì useReducer cũng làm được, và ngược lại
// const [state, dispatch] = useReducer(reducer, initState)
// state: tất cả các loại dữ liệu (kiểu dữ liệu nguyên thủy, mảng, object, function)
// reducer: hàm, có 2 tham số (state, action)
// const reducer = (state, action) => {}
// dispatch(action)
// action : {
//    type: 'hành động gì',
//    payload: 'dữ liệu'
// }