import { FC } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux";
import { clearOpenForm } from "../../redux/slices/open-forms-slice";
import { useQuery } from "@tanstack/react-query";

export const OpenFormToast: FC = () => {
  const newFormId = useSelector((state: RootState) =>
    state.openFormsReducer.formIds.at(-1),
  );
  const lastAction = useSelector(
    (state: RootState) => state.openFormsReducer.lastAction,
  );

  const { refetch } = useQuery({
    queryKey: ["get-forms"],
  });

  const handleClose = () => {
    refetch()
    store.dispatch(clearOpenForm());
  };

  return (
    <ToastContainer position="bottom-end">
      <Toast
        onClose={handleClose}
        show={lastAction === "add"}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Новая открытая заявка</strong>
        </Toast.Header>
        <Toast.Body>Открыта новая форма №{newFormId}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};


