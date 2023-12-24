import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ParkTable } from "../park-table";
import { OptionsBar } from "./options-bar";

import styles from "./station-page-content.module.css";
import { baseUrl } from "../../consts";
import { useParams } from "react-router-dom";
import { VirtualWay } from "../virtual-way/virtual-way";
import { useMemo } from "react";

export function StationPageContent() {
  const { id: stationId } = useParams();

  const { data } = useQuery({
    queryKey: ["get-station", stationId],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}stations/${stationId}`);
      return response.data;
    },
  });

  const { data: forms } = useQuery({
    queryKey: ["get-forms"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}forms/openedForms`);
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
      {forms?.length > 0 && 
        <>
          <p className={styles.title}>Виртуальные пути</p>

          {forms.map((id: number) => <VirtualWay key={id} id={id}/>)}
        </>}
    </div>
  );
}
