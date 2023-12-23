import { useDrag } from "react-dnd";

import styles from "./wagon.module.css";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import trainDefaultIcon from '../../assets/svg/train_default.svg'

export interface IWagonProps {
  id: number;
}

export function Wagon({ id }: IWagonProps) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Вагон № {id}</Popover.Header>
      <Popover.Body>
        <div className={styles.field}>
          <p>Простой по станции</p>
          <p>1</p>
        </div>
        <div className={styles.field}>
          <p>Собственник</p>
          <p>1</p>
        </div>
        <div className={styles.field}>
          <p>Арендатор</p>
          <p>1</p>
        </div>
        <Button>История операций</Button>
      </Popover.Body>
    </Popover>
  );

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "123",
      item: { id },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,
      }),
    }),
    [],
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <img ref={dragRef} style={{ opacity }} src={trainDefaultIcon}/>
    </OverlayTrigger>
  );
}
