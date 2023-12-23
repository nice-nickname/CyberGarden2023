import { StationPage } from "./pages/station-page/station-page";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-bootstrap";
import { Provider } from "react-redux";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { store } from "./redux";

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <StationPage />
          <Tooltip id="train-info" />
        </DndProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
