import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";
import { useCallback, useState } from "react";
import { StationModal } from "./station-modal";


export function MapPage() {

    const [choosenStation, setChoosenStation] = useState<number | null>(null)

    let { data } = useQuery({
        queryKey: ['get-stations'],
        queryFn: async () => {
          const data = await axios.get(`${baseUrl}stations`)
          return data.data
        }
      })

    const onClickMark =useCallback((station: any) => {
        setChoosenStation(station.id)
    }, [setChoosenStation])

    if (!data) {
        return null
    }

    data[0].posotion = [53.7381465, 87.0987051]
    data[1].posotion = [53.7637861, 87.5870778]

    return (
        <>
            <StationModal id={choosenStation} onClose={() => setChoosenStation(null)}/>
            <YMaps>
                <Map style={{ width: '100vw', height: '100vh', overflow: "hidden" }} defaultState={{ center: [53.74, 87.3], zoom: 9 }} >
                    {data?.map((station: any) => 
                        <Placemark 
                            onClick={onClickMark.bind(null, station)} 
                            geometry={station.posotion} 
                            options={{iconColor: '#f57f29'}}
                        />
                    )}
                </Map>
            </YMaps>
        </>
    )
}