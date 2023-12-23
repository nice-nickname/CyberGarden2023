import { StationPage } from "./pages/station-page/station-page";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-bootstrap";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <StationPage />
      <Tooltip id="train-info" />
    </DndProvider>
  );
}

export default App;
