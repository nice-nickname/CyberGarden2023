import Form from 'react-bootstrap/esm/Form'
import styles from './park-table.module.css'

export function ParkTable() {

    const a = [1,1,1,1,1,1,1]

    return (
        <div className={styles.table}>
            <div className={styles.table__header}>
                <p className={styles.table__name}>Парк "П"</p>
            </div>
            {a.map(() => (<div className={styles.table__row}>
                <div className={styles.table__cell_id}>
                    <Form.Check // prettier-ignore
                        type='checkbox'
                        label='1'
                    />
                </div>
                <div className={styles.table__cell_id}>
                    68
                </div>
                <div className={styles.table__cell_field}></div>
                <div className={styles.table__cell_field}></div>
                <div className={styles.table__cell_field}></div>
            </div>))}
        </div>
    )
}