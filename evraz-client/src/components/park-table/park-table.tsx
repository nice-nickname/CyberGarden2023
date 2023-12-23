import { useQuery } from "@tanstack/react-query";
import { ParkRow } from "./park-row";
import styles from "./park-table.module.css";
import axios from "axios";

export interface IParkTableProps {
  id: number
}

export function ParkTable({ id }: IParkTableProps) {

  const { data } = useQuery({
    queryKey: ['get-park', id],
    queryFn: async () => {
      const response = await axios.get(`https://0a4b-83-97-115-37.ngrok-free.app/park/${id}`)
      return response.data
    }
  })

  const a = [1, 1, 1, 1, 1, 1, 1];

  if (!data) {
    return null
  }

  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <p className={styles.table__name}>{data.name}</p>
      </div>
      {data.waysIds.map((id: number) => (
        <ParkRow id={id} />
      ))}
    </div>
  );
}
