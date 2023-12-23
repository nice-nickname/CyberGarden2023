import { StationPage } from "./pages/station-page/station-page";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <StationPage />
    </DndProvider>
  );
}

export default App;
