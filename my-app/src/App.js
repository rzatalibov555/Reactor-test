import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';

import Post from './Post';






// const Slider = (props) => {

//   const [slide, setSlide] = useState(0);

//   return (
//     <div className="container">
//       <div className="slider w-50 m-auto">
//         <img style={{ width: "500px", marginTop: "50px" }} className="d-block w-100" src="https://i0.wp.com/www.thewrap.com/wp-content/uploads/2023/02/thebatman3-1200x675-1.jpg?fit=990%2C557&ssl=1" alt="slide" />

//         <div className="tect-center mt-5">
//           Active slide { } <br />
//           {/* {this.state.autoplay ? "auto" : null} */}
//         </div>

//         <div className="button mt-3">
//           <button className="btn btn-primary me-2" >-1</button>
//           <button className="btn btn-primary me-2" >+1</button>
//           <button className="btn btn-primary me-2" >Toggle autoplay</button>
//         </div>
//       </div>
//     </div>

//   )
// }



// const Hooks = () => {

// const [state, setState] = useState({value: 1,count: 10})

// const updateState = (key) => {

//   setState(() => {
//     const newState = { ...state }
//     newState[key] += 1;
//     return newState;
//   })

// };

// return (
//   <div className='hooks'>
//     <div>Value: {state.value}</div>
//     <div>Count: {state.count}</div>
//     <button onClick={() => updateState('value')}>Add Value</button>
//     <button onClick={() => updateState('count')}>Add Count</button>
//   </div>
// )

// const chAge = () => {

//   setData(()=>{
//     const ddd = {...data}
//     ddd.years = 202222
//     return ddd
//   })
// }
// }
// =========================================================================

// const Apis = () => {
//   const [data, setData] = useState([])
 
//   useEffect(() => {

//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => setData(json))

//   }, [])

//   return (
//     <div className='hooks'>

//       { data.map( item => 
//         <div className='item' key={item.id}> 
//             <h2>{item.title}</h2>
//             <p>{item.body}</p>
//             <p>{item.id}</p>
//         </div>) 
//       }

//     </div>
//   )
//   // =========================================================================
// }


const Pagination = () => {

  const [page, setPage] = useState(1)
  // const [minus, setMinus] = useState(5)

  const addPage = () => {
    setPage(page + 1)
  }

  const minusPage = () => {
    setPage(page - 1)
  }

  return(
    <div className="App">
      <div>Page: {page}</div>
      <button onClick={minusPage}>Back</button>
      <button onClick={addPage}>Next</button>
     
      <hr />
      <Post page={page}/>
    </div>
  )


}


const Example = () => {
  
  // const [count, setCount] = useState(10)
  
  // useEffect(() => {
  //   setInterval(() => {
  //      setCount((prev) => prev - 1)
  //   },1000)
  // },[])


  // return <h1>{count}</h1>

}


const Example22 = () => {

    const [rcount, setRcount] = useState(10)


    const onClick = () => {
      setRcount((prev) => prev - 1)
      setRcount((prev) => prev - 1)
    }

    return(
      <h1 onClick={onClick}>{rcount}</h1>
    )

    // useEffect(() => {

    // })
}

function App() {
  return (
    <div className="App">
      {/* <Hooks /> */}
      {/* <Apis /> */}
      <Pagination/>
      {/* <Example22 /> */}
      {/* <Slider /> */}
    </div>
  );
}

export default App;
