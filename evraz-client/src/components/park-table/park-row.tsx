import classNames from "classnames";
import { Wagon } from "../wagon";
import styles from "./park-table.module.css";
import { useDrop } from "react-dnd";
import { useMemo } from "react";
import { setMoveTrain } from "../../redux/slices/station-operation-slice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Locomotive } from "../locomotive";

export interface IParkRowProps {
  id: number;
  stationId: number;
  parkId: number;
}

export function ParkRow({ id, stationId, parkId }: IParkRowProps) {
  const dispatch = useDispatch();

  const linesFilter = useSelector((state: RootState) => state.filterStationReducer.allLines)

  const { data } = useQuery({
    queryKey: ["get-way", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}way/${id}`);
      return response.data;
    },
  });

  const { rightLocomotive, leftLocomotive } = useMemo(() => {
    if(!data) {
      return { rightLocomotive: null, leftLocomotive: null }
    }
    return {
      rightLocomotive: data?.locomotives?.find((l: any) => l.direction = 'RIGHT'),
      leftLocomotive: data?.locomotives?.find((l: any) => l.direction = 'LEFT'),
    }
  }, [data])

  const [, drop] = useDrop(() => ({
    accept: "123",
    drop: (data: any) => {
      dispatch(
        setMoveTrain({
          ...data,
          trainSecondId: id,
          parkSecondId: parkId,
          stationSecondId: stationId,
          waySecondId: id,
        }),
      );
    },
  }));

  if (!data || (!linesFilter && !data.wagonsCount)) {
    return null;
  }

  return (
    <div
      className={classNames(styles.table__row, {
        [styles.table__row_wrong]: false,
      })}
    >
      <div className={styles.table__cell_id}>{data.name}</div>
      <div
        className={classNames(styles.table__cell_id, {
          [styles.table__cell_id_wrong]: false,
        })}
      >
        {data.wagonsCount}/{data.maxCarriagesCount}
      </div>
      <div className={classNames(styles.table__cell_field, styles.table__cell_field_l)}>{leftLocomotive && <Locomotive />}</div>
      <div className={styles.table__cell_field} ref={drop}>
        {data.wagonsIds.map((wagonId: number) => (
          <Wagon
            key={wagonId}
            id={wagonId}
            stationId={stationId}
            parkId={parkId}
            wayId={id}
          />
        ))}
      </div>
      <div className={classNames(styles.table__cell_field, styles.table__cell_field_l)}>{rightLocomotive && <Locomotive />}</div>
    </div>
  );
}
