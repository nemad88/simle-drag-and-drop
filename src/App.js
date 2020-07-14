import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ContextProvider } from "react-sortly";
import DragAndDropList from "./DragAndDropList/DragAndDropList";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <DragAndDropList />
      </ContextProvider>
    </DndProvider>
  );
}

export default App;
