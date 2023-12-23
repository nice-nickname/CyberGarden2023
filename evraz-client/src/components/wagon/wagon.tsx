import { useDrag } from "react-dnd";

import styles from "./wagon.module.css";

export interface IWagonProps {
  id: number;
}

export function Wagon({ id }: IWagonProps) {
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

  return <div className={styles.wagon} ref={dragRef} style={{ opacity }} />;
}
