import Form from 'react-bootstrap/Form'
import styles from './station-filter-bar.module.css'
import { TStation } from '../../types'
import { stationsMock } from '../../mock'
import { useCallback, useEffect, useMemo, useState } from 'react'
import closeIcon from '../../assets/svg/close.svg'

export function StationFilterBar() {

    const [stations, setStations] = useState(stationsMock.map(station => ({...station, state: false})))

    const onClickOption = ({ target }: any) => {
        setStations(prev => {
            const index = prev.findIndex((station: TStation) => Number(station.id) === Number(target.value))
            prev[index].state = !prev[index].state
            console.log(prev, index, target.value)
            return [...prev]
        })
    }

    const filteredStations = useMemo(() => stations.filter(station => station.state), [stations])


    useEffect(() => {
        console.log(filteredStations, stations)
    }, [filteredStations, stations])

    return (
        <div className={styles.bar}>
            <Form.Select className={styles.bar_select} onChange={onClickOption}>
                {stations.map((station: TStation) => <option key={station.id} value={station.id}>{station.name}</option>)}
            </Form.Select>
            <div className={styles.bar__selected}>{filteredStations.map((station) => (
                <div key={station.id} className={styles.bar__item}>
                    <p className={styles.bar__name_item}>{station.name}</p>
                    <img src={closeIcon} alt='close'/>
                </div>
            ))}</div>
        </div>
    )
}