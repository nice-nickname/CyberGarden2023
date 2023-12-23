import classNames from "classnames";
import { Wagon } from "../wagon";
import styles from "./park-table.module.css";
import { useDrop } from "react-dnd";
import { setMoveTrain } from "../../redux/slices/station-operation-slice";

export interface IParkRowProps {
  id: number;
}

export function ParkRow({ id }: IParkRowProps) {
  const a = [1, 1, 1, 1, 1, 1, 1];

  const [, drop] = useDrop(() => ({
    accept: "123",
    drop: (data: any) => {
      setMoveTrain({trainFirstId: data.id, trainSecondId: id });
    },
  }));

  return (
    <div
      className={classNames(styles.table__row, {
        [styles.table__row_wrong]: true,
      })}
    >
      <div className={styles.table__cell_id}>1</div>
      <div
        className={classNames(styles.table__cell_id, {
          [styles.table__cell_id_wrong]: true,
        })}
      >
        68 / 2
      </div>
      <div className={styles.table__cell_field}></div>
      <div className={styles.table__cell_field} ref={drop}>
        {a.map((a, index) => (
          <Wagon id={index} />
        ))}
      </div>
      <div className={styles.table__cell_field}></div>
    </div>
  );
}
