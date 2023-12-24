import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";
import { StationTable } from "../station-table/station-table";

import styles from './virtual-way.module.css'
import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { ApproveForm } from "./approve-form";

export interface IVirtualWayProps {
    id: number
}

export function VirtualWay({ id }: IVirtualWayProps) {

    const [state, setState] = useState(false)

    const { data } = useQuery({
        queryKey: ["get-merge", id],
        queryFn: async () => {
          const response = await axios.get(`${baseUrl}forms/shadowMerge/${id}`);
          return response.data;
        },
      });

      const stationArray = useMemo(() => {
        const result = []
        if(!data) return []
        let ways = data?.ways;

        while (ways?.length) {
            const currentSId = ways[0].stationId;
            const correctWays = ways.filter((w: any) => w.stationId === currentSId)
            ways = ways.filter((w: any) => w.stationId !== currentSId)
            if(data?.wagons.filter((w: any) => w.stationId === currentSId).length > 0) result.push({id: currentSId, ways: correctWays})
        }

        return result;
      }, [data])

    return (
        <div className={styles.station_list}>
            <ApproveForm id={id} state={state} onClose={() => {setState(false)}}/>
            <div className={styles.form__header}>
                <p className={styles.title}>Форма {id}</p>
                <Button style={{background: '#f57f29'}} onClick={() => {setState(true)}}>Применить</Button>
            </div>
            {stationArray.map((station: any) => <StationTable id={station.id} ways={station.ways} key={station.id}/>)}
        </div>
    )
}