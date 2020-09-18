import React from 'react';

function Food({mem}){
return <h1>way point {mem }</h1>;
}

function App() {
    return (
      <div>
        <Food mem="vegas"  />
        <Food mem="york"  />
        <Food mem="rigon"  />
        <Food mem="pheonix"  />
        <Food mem="georgia"  />

      </div>
      );
    }

export default App;
