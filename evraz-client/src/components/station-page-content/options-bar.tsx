import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button';

import styles from './station-page-content.module.css'

export function OptionsBar() {

    return (
        <div className={styles.bar}>
            <div className={styles.bar__left_side}>
                <Form.Check // prettier-ignore
                    type='checkbox'
                    label='Скрыть свободные пути'
                />
                <Form.Check // prettier-ignore
                    type='checkbox'
                    label='Номер вагона'
                />
            </div>
            <div className={styles.bar__right_side}>
                <Button className={styles.bar__btn} variant="primary">Операции на станции</Button>
            </div>
        </div>
    )
}