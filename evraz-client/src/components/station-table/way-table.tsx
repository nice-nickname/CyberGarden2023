import classNames from 'classnames';
import styles from './station-table.module.css'
import { Wagon } from '../wagon';
import { Locomotive } from '../locomotive';
import { useMemo } from 'react';

export interface IWayTableProps {
    way: any;
}

export function WayTable({way}: IWayTableProps) {

    const { rightLocomotive, leftLocomotive } = useMemo(() => {
        if(!way) {
          return { rightLocomotive: null, leftLocomotive: null }
        }
        return {
          rightLocomotive: way?.locomotives?.find((l: any) => l.direction = 'RIGHT'),
          leftLocomotive: way?.locomotives?.find((l: any) => l.direction = 'LEFT'),
        }
      }, [way])

    return (
        <div
        className={classNames(styles.table__row, {
          [styles.table__row_wrong]: false,
        })}
      >
        <div className={styles.table__cell_id}>{way.name}</div>
        <div
          className={classNames(styles.table__cell_id, {
            [styles.table__cell_id_wrong]: false,
          })}
        >
          {way.wagonsCount}/{way.maxCarriagesCount}
        </div>
        <div className={classNames(styles.table__cell_field, styles.table__cell_field_l)}>{leftLocomotive && <Locomotive />}</div>
        <div className={styles.table__cell_field}>
          {way.wagonsIds.map((wagonId: number) => (
            <Wagon
              key={wagonId}
              id={wagonId}
            />
          ))}
        </div>
        <div className={classNames(styles.table__cell_field, styles.table__cell_field_l)}>{rightLocomotive && <Locomotive />}</div>
      </div>
    )
}