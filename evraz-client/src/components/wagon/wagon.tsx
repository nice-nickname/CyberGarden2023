import { useDrag } from "react-dnd";
import { memo } from 'react'

import styles from "./wagon.module.css";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import trainDefaultIcon from '../../assets/svg/train_default.svg'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";

export interface IWagonProps {
  id: number;
  parkId: number;
  stationId: number;
  wayId: number;
}

export const Wagon = memo(({ id, parkId, stationId, wayId }: IWagonProps) => {

  const { data } = useQuery({
    queryKey: ['get-wagon'],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}wagon/${id}`)
      return response.data
    }
  })

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
      item: { trainFirstId: id, parkFirstId: parkId, stationFirstId: stationId, firstWayId: wayId },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,
      }),
    }),
    [],
  );

  if(!data) {
    return null
  }

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <img ref={dragRef} style={{opacity}} src={trainDefaultIcon}/>
    </OverlayTrigger>
  );
})
