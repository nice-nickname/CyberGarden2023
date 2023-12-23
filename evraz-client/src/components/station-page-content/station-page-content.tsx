import { useSelector } from "react-redux";
import { OwnerBar } from "../owner-bar";
import { ParkTable } from "../park-table";
import { OptionsBar } from "./options-bar";

import styles from "./station-page-content.module.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function StationPageContent() {

  const stationId = useSelector((state: any) => state.stationReducer.stationId)

  const { data } = useQuery({
    queryKey: ['get-station', stationId],
    queryFn: async () => {
      const response = await axios.get(`https://0a4b-83-97-115-37.ngrok-free.app/stations/${stationId}`) 
      return response.data
    }
  })

  if(!data) {
    return null
  }

  return (
    <div className={styles.content}>
      <OptionsBar />
      <OwnerBar />
      {data.parksIds.map((id: number) => <ParkTable id={id}/>)}
    </div>
  );
}
