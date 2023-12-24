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
        <Col className={styles.col} xs={3}>
          Откуда
        </Col>
        <Col className={styles.col} xs={3}>
          Куда
        </Col>
        <Col className={styles.col}>Начало</Col>
        <Col className={styles.col}>Конец</Col>
      </Row>

      {forms.map((item, index) => (
        <OperationListRow key={item.id} form={item} index={index} />
      ))}
    </Container>
  );
}

export { OperationList };
