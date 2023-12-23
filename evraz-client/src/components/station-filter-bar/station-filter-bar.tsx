import Form from "react-bootstrap/Form";
import styles from "./station-filter-bar.module.css";
import { TStation } from "../../types";
import { stationsMock } from "../../mock";
import { useCallback, useEffect, useMemo, useState } from "react";
import closeIcon from "../../assets/svg/close.svg";
import axios from "axios";

import {
  useQuery
} from '@tanstack/react-query'

export function StationFilterBar() {

  const { data } = useQuery({
    queryKey: ['get-stations'],
    queryFn: async () => {
      const data = await axios.get('https://0a4b-83-97-115-37.ngrok-free.app/stations')
      return data.data
    }
  })
  const [stations, setStations] = useState(
    stationsMock.map((station) => ({ ...station, state: false })),
  );

  const onClickOption = ({ target }: any) => {
    setStations((prev) => {
      const index = prev.findIndex(
        (station: TStation) => Number(station.id) === Number(target.value),
      );
      prev[index].state = !prev[index].state;
      console.log(prev, index, target.value);
      return [...prev];
    });
  };

  const filteredStations = useMemo(
    () => stations.filter((station) => station.state),
    [stations],
  );

  if(!data) {
    return null
  }


  return (
    <div className={styles.bar}>
      <Form.Select className={styles.bar_select} onChange={onClickOption}>
        {data.map((station: TStation) => (
          <option key={station.id} value={station.id}>
            {station.title}
          </option>
        ))}
      </Form.Select>
      <div className={styles.bar__selected}>
        {filteredStations.map((station) => (
          <div key={station.id} className={styles.bar__item}>
            <p className={styles.bar__name_item}>{station.name}</p>
            <img src={closeIcon} alt="close" />
          </div>
        ))}
      </div>
    </div>
  );
}
