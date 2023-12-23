import { useQuery } from "@tanstack/react-query";
import { ParkRow } from "./park-row";
import styles from "./park-table.module.css";
import axios from "axios";
import { baseUrl } from "../../consts";

export interface IParkTableProps {
  id: number;
  stationId: number;
}

export function ParkTable({ id, stationId }: IParkTableProps) {
  const { data } = useQuery({
    queryKey: ["get-park", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}park/${id}`);
      return response.data;
    },
  });

  if (!data) {
    return null;
  }

  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        <p className={styles.table__name}>{data.name}</p>
      </div>
      {data.waysIds.map((wayId: number) => (
        <ParkRow key={wayId} id={wayId} parkId={id} stationId={stationId} />
      ))}
    </div>
  );
}
