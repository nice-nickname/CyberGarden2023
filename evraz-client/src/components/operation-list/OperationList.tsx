import moment from "moment"
import styles from "./styles.module.css"
import { Col, Container, Row } from "react-bootstrap"
import ActiveChip from "../active-chip/ActiveChip"
import data from "../../mock/operation-list"
import classNames from "classnames"

function OperationList() {

    const formatDate = (date: string) => {
        return moment(date).format("DD.MM.YYYY hh:mm")
    }

    return (
        <Container className={`${styles.operationList}`}>
            <Row className={`border-bottom ${styles.row}`}>
                <Col className={styles.col} xs={1}>№ Операции</Col>
                <Col className={styles.col}>Операция</Col>
                <Col className={styles.col} xs={3}>Откуда</Col>
                <Col className={styles.col} xs={3}>Куда</Col>
                <Col className={styles.col} xs={1}>Длит. мин</Col>
                <Col className={styles.col}>Начало</Col>
                <Col className={styles.col}>Конец</Col>
            </Row>

            {data.map((item, index) => (
                <Row className={classNames(styles.row, {
                    ['border-bottom']: index !== data.length - 1
                })}>
                    <Col className={`${styles.col} position-relative`} xs={1}>
                        <ActiveChip isActive={false} />
                        <div className="ms-3">
                            {item.visibleNumber}
                        </div>
                    </Col>
                    <Col className={`${styles.col}`}>{item.operationName}</Col>
                    <Col className={`${styles.col}`} xs={3}>{`${item.departureStation.title}, Парк: ${item.departurePark.name} (${item.departureWay.name})`}</Col>
                    <Col className={`${styles.col}`} xs={3}>{`${item.destinationStation.title}, Парк: ${item.destinationPark.name} (${item.destinationWay.name})`}</Col>
                    <Col className={`${styles.col}`} xs={1}>{item.normalMinutesLength}</Col>
                    <Col className={`${styles.col}`}>{formatDate(item.startDate)}</Col>
                    <Col className={`${styles.col}`}>{formatDate(item.endDate)}</Col>
                </Row>
            ))}
        </Container>
    )
}

export default OperationList