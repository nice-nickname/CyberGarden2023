import moment from "moment";
import styles from "./styles.module.css";
import { Col, Row } from "react-bootstrap";
import ActiveChip from "../active-chip/ActiveChip";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../consts";
import { operationReasons } from "../../mock";
import { IFormData } from "../modals/operation-list";

export interface IOperationListRowProps {
  form: IFormData,
  index: number
}

export function OperationListRow({ form, index }: IOperationListRowProps) {

  const { data } = useQuery({
    queryKey: ['get-form', form.id],
    queryFn: async () => {
      const data = (await axios.get(`${baseUrl}forms/createdForms/${form.id}`)).data;

      const departureStationName = (await axios.get(`${baseUrl}stations/${data.departureStation}`)).data.title;
      const departureParkName = (await axios.get(`${baseUrl}park/${data.departurePark}`)).data.name;
      const departureWayName = (await axios.get(`${baseUrl}way/${data.departureWay}`)).data.name;
      const destinationStationName = (await axios.get(`${baseUrl}stations/${data.destinationStation}`)).data.title;
      const destinationParkName = (await axios.get(`${baseUrl}park/${data.destinationPark}`)).data.name;
      const destinationWayName = (await axios.get(`${baseUrl}way/${data.destinationWay}`)).data.name;


      const reasonName = operationReasons.find(s => s.id === data.reasonId)?.title;

      return {
        ...data,
        departureStationName,
        departureParkName,
        departureWayName,
        destinationStationName,
        destinationParkName,
        destinationWayName,
        reasonName,
        operationName: 'Перемещение вагонов'
      };
    }
  });

  if (!data) {
    return null;
  }

  console.log("ehehhe", data);

  return (
    <Row
      className={classNames(styles.row, {
        ["border-bottom"]: index !== data.length - 1,
      })}
    >
      <Col className={`${styles.col} position-relative`} xs={1}>
        <ActiveChip isActive={false} />
        <div className="ms-3">{data.formId}</div>
      </Col>
      <Col className={`${styles.col}`}>{data.operationName}</Col>
      <Col
        className={`${styles.col}`}
        xs={3}
      >{`${data.departureStationName}, Парк: ${data.departureParkName} (${data.departureWayName})`}</Col>
      <Col
        className={`${styles.col}`}
        xs={3}
      >
        {`${data.destinationStationName}, Парк: ${data.destinationParkName} (${data.destinationWayName})`}</Col>
      <Col className={`${styles.col}`}>{moment(data.timestamp).format('DD.MM.YYYY hh:mm')}</Col>
      <Col className={`${styles.col}`}></Col>
    </Row>
  );
}
