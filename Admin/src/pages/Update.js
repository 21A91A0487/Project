import React, { useState } from 'react';

function MyComponent() {
  // Define state variables
  const [count, setCount] = useState(0);

  // Function to update count
  const updateCount = () => {
    // Increment count by 1
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
