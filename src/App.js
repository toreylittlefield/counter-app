  // src/App.js
  import MyComponent from "./MyComponent";
  import React, { useState } from 'react';

  const App = () => {
    const [count, setCount] = useState(0);

    const makeIncrementer = amount => () =>
        setCount(prevState => (prevState + amount));

    const increment = makeIncrementer(1);

    const decrement = makeIncrementer(-1);

      return (
        <div className="App">
          <div>
            <p>Count: {count}</p>
            <button className="increment" onClick={increment}>Increment count</button>
            <button className="decrement" onClick={decrement}>Decrement count</button>
          </div>
          <MyComponent />
        </div>
      )
  }

  export default App;