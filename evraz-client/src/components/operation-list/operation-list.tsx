import styles from "./styles.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { IFormData } from "../modals/operation-list";
import { OperationListRow } from "./operation-list-row";

export interface IOperationProps {
  forms: IFormData[]
}


function OperationList({ forms }: IOperationProps) {

  return (
    <Container className={`${styles.operationList}`}>
      <Row className={`border-bottom ${styles.row}`}>
        <Col className={styles.col} xs={1}>
          №
        </Col>
        <Col className={styles.col}>Операция</Col>
        <Col className={styles.col} xs={2}>
          Откуда
        </Col>
        <Col className={styles.col} xs={2}>
          Куда
        </Col>
        <Col xs={1} className={styles.col}>Начало</Col>
        <Col xs={1} className={styles.col}>Конец</Col>
        <Col className={styles.col}>Вагоны</Col>
        <Col className={styles.col}>Комментарии</Col>
      </Row>

      {forms.map((item, index) => (
        <OperationListRow key={item.id} form={item} index={index} colClass={styles.col} rowClass={styles.row} />
      ))}
    </Container>
  );
}

export { OperationList };
