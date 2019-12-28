import React, { useState } from 'react';
import ResourceList from './ResourceList'
import Users from './Users'

const App = () => {

  const [resourceName, setResourceName] = useState('posts');
  console.log(resourceName)

  return (
    <div className="App">
      <Users />
      <button onClick={() => setResourceName('posts')}>Posts</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </div>
  );
}

export default App;
