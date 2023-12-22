import { ownersMock } from '../../mock'
import styles from './owner-bar.module.css'

export function OwnerBar() {

    const ownrers = ownersMock 

    return (
        <div className={styles.bar}>
            <p className={styles.bar__name}>Собственники: </p>
            {ownrers.map(owner => (
                <div className={styles.bar__item} key={owner.name}>
                    <div className={styles.bar__b} style={{background: owner.color}}/><p className={styles.bar__name}>{owner.name}</p>
                </div>
            ))}
        </div>
    )
}