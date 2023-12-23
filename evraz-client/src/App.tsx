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
import { OperationModal } from "./components/operation-forms";
import { OperationMoveForm } from "./components/operation-forms/move-form";

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          {/* <StationPage />
          <Tooltip id="train-info" /> */}
          <OperationModal state={true} title="Выполнение операции" onSave={() => {}} formId="">
            <OperationMoveForm formId="" vagonNumber="123" />
          </OperationModal>
        </DndProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
