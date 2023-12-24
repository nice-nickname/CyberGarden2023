import moment from "moment";
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
  index: number,
  rowClass: string,
  colClass: string
}

export function OperationListRow({ form, index, rowClass, colClass }: IOperationListRowProps) {

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
      const status = (await axios.get(`${baseUrl}forms/formStatus/${form.id}`)).data

      const reasonName = operationReasons.find(s => s.id === data.reasonId)?.title;

      const wagons = []
      for (const wagonId of data.wagons) {
        const wagonName = '№' + (await axios.get(`${baseUrl}wagon/${wagonId}`)).data.inventoryNumber
        wagons.push(wagonName)
      }

      return {
        ...data,
        departureStationName,
        departureParkName,
        departureWayName,
        destinationStationName,
        destinationParkName,
        destinationWayName,
        reasonName,
        operationName: 'Перемещение вагонов',
        wagons,
        status
      };
    }
  });

  if (!data) {
    return null;
  }

  return (
    <Row
      className={classNames(rowClass, {
        ["border-bottom"]: index !== data.length - 1,
      })}
    >
      <Col className={`${colClass} position-relative`} xs={1}>
        <ActiveChip isActive={data.status !== 'OPEN'} />
        <div className="ms-3">{data.formId}</div>
      </Col>
      <Col className={`${colClass}`}>{data.operationName}</Col>
      <Col
        className={`${colClass}`}
        xs={2}
      >{`${data.departureStationName}, Парк: ${data.departureParkName} (${data.departureWayName})`}</Col>
      <Col
        className={`${colClass}`}
        xs={2}
      >
        {`${data.destinationStationName}, Парк: ${data.destinationParkName} (${data.destinationWayName})`}</Col>
      <Col xs={1} className={`${colClass}`}>{moment(data.timestamp).format('DD.MM.YYYY hh:mm')}</Col>
      <Col xs={1} className={`${colClass}`}>{moment(data.timestamp).format('DD.MM.YYYY hh:mm')}</Col>
      <Col className={`${colClass}`}>{data.wagons.join('\n')}</Col>
      <Col className={`${colClass}`}>{data.comment}</Col>
    </Row>
  );
}
