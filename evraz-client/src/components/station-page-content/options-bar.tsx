import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/Button";
import { useCallback, useState } from "react";

import styles from "./station-page-content.module.css";
import { OperationListModal } from "../modals/operation-list";
import { store } from "../../redux";
import { setLineFilter, setNumberFilter } from "../../redux/slices/filter-station-slice";

export function OptionsBar() {
  const [storyIsOpen, setStoryIsOpen] = useState(false);

  const onChangeLine = useCallback(() => {
    store.dispatch(setLineFilter())
  }, [])

  const onChangeNumber = useCallback(() => {
    store.dispatch(setNumberFilter())
  }, [])

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.bar__left_side}>
          <Form.Check // prettier-ignore
            type="checkbox"
            label="Скрыть свободные пути"
            onChange={onChangeLine}
          />
          <Form.Check // prettier-ignore
            type="checkbox"
            label="Номер вагона"
            onChange={onChangeNumber}
          />
        </div>
        <div className={styles.bar__right_side}>
          <Button
            onClick={setStoryIsOpen.bind(null, true)}
            className={styles.bar__btn}
            variant="primary"
          >
            Операции на станции
          </Button>
        </div>
      </div>
      <OperationListModal
        state={storyIsOpen}
        onClose={setStoryIsOpen.bind(null, false)}
      />
    </>
  );
}
