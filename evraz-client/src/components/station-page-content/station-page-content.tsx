import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ParkTable } from "../park-table";
import { OptionsBar } from "./options-bar";

import styles from "./station-page-content.module.css";
import { baseUrl } from "../../consts";
import { useParams } from "react-router-dom";

export function StationPageContent() {
  const { id: stationId } = useParams();

  const { data } = useQuery({
    queryKey: ["get-station", stationId],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}stations/${stationId}`);
      return response.data;
    },
  });

  if (!data) {
    return null;
  }

  return (
    <div className={styles.content}>
      <OptionsBar />
      {data.parksIds.map((id: number) => (
        <ParkTable key={id} id={id} stationId={stationId} />
      ))}
    </div>
  );
}
