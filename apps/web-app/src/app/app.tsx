import React, { useEffect, useState } from 'react';

export const App = () => {

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to web-app!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>MyTeeext</div>
    </>
  );
};

export default App;
