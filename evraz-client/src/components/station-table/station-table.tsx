import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";
import { ParkTable } from "./park-table";

export interface IStationTableProps {
    id: number,
    ways: any[],
}

export function StationTable({id, ways}: IStationTableProps) {

    const { data } = useQuery({
        queryKey: ["get-station", id],
        queryFn: async () => {
          const response = await axios.get(`${baseUrl}stations/${id}`);
          return response.data;
        },  
    });

    if(!data) return null

    return (
        <div>
            <p>Станция: {data.title}</p>
            {data.parksIds.map((id: number) => <ParkTable id={id} ways={ways.filter(w => w.parkId === id)}/>)}
        </div>
    )
}