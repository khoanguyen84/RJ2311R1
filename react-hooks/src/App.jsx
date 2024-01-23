import { useReducer } from 'react';
import './App.css'
import reducer, { initState } from './reducers/reducer';
import { decrement, increment } from './reducers/action';

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