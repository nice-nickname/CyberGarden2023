import { useDrag } from "react-dnd";

import styles from "./wagon.module.css";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import trainDefaultIcon from '../../assets/svg/train_default.svg'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IWagonProps {
  id: number;
}

export function Wagon({ id }: IWagonProps) {

  const { data } = useQuery({
    queryKey: ['get-wagon'],
    queryFn: async () => {
      const response = await axios.get(`https://0a4b-83-97-115-37.ngrok-free.app/wagon/${id}`)
      return response.data
    }
  })

  if(!data) {
    return null
  }

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

  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     type: "123",
  //     item: { id },
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0 : 1,
  //     }),
  //   }),
  //   [],
  // );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <img src={trainDefaultIcon}/>
    </OverlayTrigger>
  );
}
