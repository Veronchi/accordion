import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answer about login</h3>
        <SingleQuestion />
      </div>
    </main>
  );
}

export default App;
