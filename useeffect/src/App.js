// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from 'react'


/**I started here */
// function App() {
//   const [resources, setResources] = useState('posts')

//   const [items,setItems] = useState([])

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resources}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resources]) //the array never changes on different renders. if the values inside the array changes the code inside the useEffect renders
//   return (
//     <>
//       <div>
//         <button onClick={() => setResources('posts')}>Posts</button>
//         <button onClick={() => setResources('users')}>Users</button>
//         <button onClick={() => setResources('comments')}>Comments</button>
//       </div>
//       <h1>{resources}</h1>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//       })}

//     </>
//   );
// }

// export default App;

/**I ended up here */
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // To remove the eventListener...this is a clean up code and is run first to clean up what was done the last time
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div>
      {windowWidth}
    </div>
  );
}

export default App;


