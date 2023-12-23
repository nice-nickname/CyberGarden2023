import classNames from "classnames";
import { Wagon } from "../wagon";
import styles from "./park-table.module.css";
import { useDrop } from "react-dnd";
import { setMoveTrain } from "../../redux/slices/station-operation-slice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IParkRowProps {
  id: number;
}

export function ParkRow({ id }: IParkRowProps) {
  const a = [1, 1, 1, 1, 1, 1, 1];

  const { data } = useQuery({
    queryKey: ['get-way', id],
    queryFn: async () => {
      const response = await axios.get(`https://0a4b-83-97-115-37.ngrok-free.app/way/${id}`)
      return response.data
    }
  })

  const [, drop] = useDrop(() => ({
    accept: "123",
    drop: (data: any) => {
      setMoveTrain({ trainFirstId: data.id, trainSecondId: id });
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
      <div className={styles.table__cell_id}>1</div>
      <div
        className={classNames(styles.table__cell_id, {
          [styles.table__cell_id_wrong]: false,
        })}
      >
        68 / 2
      </div>
      <div className={styles.table__cell_field}></div>
      <div className={styles.table__cell_field} ref={drop}>
        {data.wagonsIds.map((id: number) => (
          <Wagon id={id} />
        ))}
      </div>
      <div className={styles.table__cell_field}></div>
    </div>
  );
}
