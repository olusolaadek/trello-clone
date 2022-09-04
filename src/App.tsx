import React from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="To do:" />
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add another list"
        dark
      />
      {/* <Column text="To do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column> */}
    </AppContainer>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}

//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
