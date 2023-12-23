import classNames from "classnames";
import { Wagon } from "../wagon";
import styles from "./park-table.module.css";
import { useDrop } from "react-dnd";
import { setMoveTrain } from "../../redux/slices/station-operation-slice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";

export interface IParkRowProps {
  id: number;
  stationId: number;
  parkId: number
}

export function ParkRow({ id, stationId, parkId }: IParkRowProps) {

  const { data } = useQuery({
    queryKey: ['get-way', id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/way/${id}`)
      return response.data
    }
  })

  const [, drop] = useDrop(() => ({
    accept: "123",
    drop: (data: any) => {
      setMoveTrain({ ...data, trainSecondId: id, parkSecondId: id, stationSecondId: stationId });
    },
  }));

  if(!data) {
    return null
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
      <div className={styles.table__cell_field}></div>
      <div className={styles.table__cell_field} ref={drop}>
        {data.wagonsIds.map((id: number) => (
          <Wagon key={id} id={id} stationId={stationId} parkId={parkId}/>
        ))}
      </div>
      <div className={styles.table__cell_field}></div>
    </div>
  );
}
