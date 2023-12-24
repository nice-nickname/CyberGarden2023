import { useDrag } from "react-dnd";
import { memo, useCallback, useMemo } from "react";

import styles from "./wagon.module.css";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl, ownerColors } from "../../consts";
import { getTrainIconByType } from "../../utils/get-icon-by-type";
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux";
import { addWagon, setWagon } from "../../redux/slices/wagon-dnd-slice";
import classNames from "classnames";

export interface IWagonProps {
  id: number;
  parkId?: number;
  stationId?: number;
  wayId?: number;
  active: boolean
}

export const Wagon = memo(({ id, parkId, stationId, wayId, active }: IWagonProps) => {
  const { data } = useQuery({
    queryKey: ["get-wagon", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}wagon/${id}`);
      return response.data;
    },
  });

  const numberFilter = useSelector((state: RootState) => state.filterStationReducer.wihtNumber)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Вагон № {data?.inventoryNumber}</Popover.Header>
      <Popover.Body>
        <div className={styles.field}>
          <p>Простой по станции</p>
          <p>{data?.idleDaysLength}</p>
        </div>
        <div className={styles.field}>
          <p>Собственник</p>
          <p>{data?.owner}</p>
        </div>
      </Popover.Body>
    </Popover>
  );

  const onClickWagon = useCallback((event: any) => {
    if(event.ctrlKey) {
      store.dispatch(addWagon({id, wayId, parkId, stationId}))
      return 
    }
    store.dispatch(setWagon({id, wayId, parkId, stationId}))
  }, [])

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

  console.log(data)
  return (
    <OverlayTrigger placement="right" overlay={popover} delay={2000}>
      <div className={classNames(styles.wagon_full, {
        [styles.wagon__full_active]: active,
      })} onClick={onClickWagon}>
        {numberFilter && <p className={styles.wagon__number}>{data?.inventoryNumber}</p>}
        <div ref={dragRef} style={{ opacity }}>
          {getTrainIconByType(data.type, data.isSick, color ?? undefined)}
        </div>
      </div>
    </OverlayTrigger>
  );
});