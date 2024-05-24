import React, { useState, Suspense } from 'react';
// import MyComponent from './components/MyComponent';


const MyComponent = React.lazy(() => import('./components/MyComponent'))

function App() {

  const [count, setCount] = useState(0);
  return ( 
    <div className="App">
      <header className='App-header'>

        <Suspense fallback={<p>This is Loading...</p>}>
        <MyComponent state= {count}/>
        </Suspense>
      
        <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      </header>
     Hello World
    </div>
   );
}

export default App;