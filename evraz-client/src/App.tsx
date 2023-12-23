import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Provider } from "react-redux";
import { store } from "./redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tooltip } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/routing";
import { OpenFormToast } from "./components/toasts";
import { OperationMoveForm } from "./components/operation-forms/move-form";
import ws from "./ws/websocket";

ws();

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router} />
          <Tooltip id="train-info" />
          <OperationMoveForm />
          <OpenFormToast />
        </DndProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
