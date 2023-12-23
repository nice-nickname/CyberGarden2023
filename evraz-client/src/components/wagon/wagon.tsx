import { useDrag } from "react-dnd";
import { memo, useMemo } from "react";

import styles from "./wagon.module.css";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl, ownerColors } from "../../consts";
import { getTrainIconByType } from "../../utils/get-icon-by-type";

export interface IWagonProps {
  id: number;
  parkId: number;
  stationId: number;
  wayId: number;
}

export const Wagon = memo(({ id, parkId, stationId, wayId }: IWagonProps) => {
  const { data } = useQuery({
    queryKey: ["get-wagon", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}wagon/${id}`);
      return response.data;
    },
  });

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

  console.log(data);

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "123",
      item: {
        trainFirstId: id,
        parkFirstId: parkId,
        stationFirstId: stationId,
        firstWayId: wayId,
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,
      }),
    }),
    [],
  );

  const color = useMemo(() => {
    if (!data) return undefined;
    for (const [key, value] of Object.entries(ownerColors)) {
      if (key === data.owner) {
        return value;
      }
    }
    return undefined;
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <div ref={dragRef} style={{ opacity }}>
        {getTrainIconByType(data.type, color ?? undefined)}
      </div>
    </OverlayTrigger>
  );
});
