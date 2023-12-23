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
import { useDispatch } from "react-redux";
import { setStation } from "../../redux/slices/station-slice";

export function StationFilterBar() {

  const dispatch = useDispatch()

  const { data } = useQuery({
    queryKey: ['get-stations'],
    queryFn: async () => {
      const data = await axios.get('https://0a4b-83-97-115-37.ngrok-free.app/stations')
      return data.data
    }
  })
  
  const onChangeStation = useCallback(({target}: any) => {
    dispatch(setStation({id: target.value}))
  }, [dispatch])

  if(!data) {
    return null
  }

  return (
    <div className={styles.bar}>
      <Form.Select className={styles.bar_select} onChange={onChangeStation}>
        {data.map((station: TStation) => (
          <option key={station.id} value={station.id}>
            {station.title}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
