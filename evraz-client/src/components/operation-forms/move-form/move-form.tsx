import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap"
import { operationReasons, operationTypes } from "../../../mock"
import { Select } from "../../inputs/select"
import { FormEventHandler, useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../../../consts"
import { useSelector } from "react-redux"
import { RootState, store } from "../../../redux"
import { OperationTypes } from "../../../types"
import { useQuery } from "@tanstack/react-query"
import moment from "moment"
import { clearOperation } from "../../../redux/slices/station-operation-slice"


function OperationMoveForm() {
  const operationTypeId = 2;

  const operations = operationTypes.find(s => s.id === operationTypeId)?.operations || []

  const [formId, setFormId] = useState<string | null>(null)
  const [comments, setComments] = useState('')
  const [reason, setReason] = useState(0)


  const {
    parkFirstId,
    parkSecondId,
    stationFirstId,
    stationSecondId,
    trainFirstId,
    wayFirstId,
    waySecondId,
    type,
  } = useSelector((state: RootState) => state.stationOperationReducer);

  const { data: wagonData } = useQuery({
    queryKey: ["get-wagon", trainFirstId],
  });

  const { data: parkFirstData } = useQuery({
    queryKey: ["get-park", parkFirstId],
  });

  const { data: parkSecondData } = useQuery({
    queryKey: ["get-park", parkSecondId],
  });

  const { data: stationFirstData } = useQuery({
    queryKey: ["get-station", stationFirstId],
  });

  const { data: stationSecondData } = useQuery({
    queryKey: ["get-station", stationSecondId],
  });

  const { data: wayFirstData } = useQuery({
    queryKey: ["get-way", wayFirstId],
  });

  const { data: waySecondData } = useQuery({
    queryKey: ["get-way", waySecondId],
  });

  useEffect(() => {
    if (type === OperationTypes.MOVE && formId == null) {
      axios
        .get(`${baseUrl}forms/createForm`)
        .then((res) => setFormId(res.data.formId));
    } else {
      setFormId(null);
    }
  }, [type]);

  const handleClose = () => {
    setFormId(null)
    store.dispatch(clearOperation())
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();

    const now = Date.now();

    axios.post(`${baseUrl}forms/wagonMove`, {
      timestamp: now,
      formId: formId,
      departureStation: Number(stationFirstId),
      departurePark: parkFirstId,
      departureWay: wayFirstId,
      destinationStation: Number(stationSecondId),
      destinationPark: parkSecondId,
      destinationWay: waySecondId,
      locomotives: [1],
      wagons: [
        trainFirstId
      ],
      needAcceptance: true,
      reasonId: reason,
      comment: comments,
      operationInitiator: "1"
    }, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    },).then(() => {
      handleClose()
    })
  }

  return (
    <Modal show={formId !== null} onHide={handleClose} size="lg">
      <Modal.Header closeButton>Операция №{formId}</Modal.Header>

      <Modal.Body>
        <Form id="form-move-wagon" onSubmit={handleSubmit} noValidate>
          <Row className="mb-1">
            <h5>Перемещение вагона №{wagonData?.inventoryNumber}</h5>
          </Row>

          <Row className="mb-3">
            <Col className="d-flex gap-2" xs={10}>
              <div>
                {stationFirstData?.title}, Парк {parkFirstData?.name}, путь (
                {wayFirstData?.name})
              </div>
              <div>→</div>
              <div>
                {stationSecondData?.title}, Парк {parkSecondData?.name}, путь (
                {waySecondData?.name})
              </div>
            </Col>
          </Row>

          <Row>
            <FormGroup as={Col}>
              <Form.Label>Начало операции</Form.Label>
              <Form.Control disabled value={moment().format('DD.MM.YYYY hh:mm')} />
            </FormGroup>
            <FormGroup as={Col}>
              <Form.Label>Комментарии</Form.Label>
              <Form.Control value={comments} onChange={ev => setComments(ev.target.value)} />
            </FormGroup>
          </Row>

          <Row className="pt-2 mt-3 mb-3 border-top">
            <FormGroup as={Col}>
              <Form.Label>Тип операции</Form.Label>
              <Select
                selected={operationTypeId}
                disabled
                data={operationTypes}
                mapper={(i) => ({
                  value: i.id,
                  text: i.name,
                })}
              />
            </FormGroup>

            <FormGroup as={Col}>
              <Form.Label>Операция</Form.Label>
              <Select
                selected={6}
                disabled
                data={operations}
                mapper={(i) => ({
                  value: i.id,
                  text: i.name,
                })}
              />
            </FormGroup>

            <FormGroup as={Col}>
              <Form.Label>Причина</Form.Label>
              <Select onChange={v => setReason(v)}
                data={operationReasons}
                mapper={i => ({
                  value: i.id,
                  text: i.title
                })} />

            </FormGroup>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="primary" type="submit" form="form-move-wagon">
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { OperationMoveForm };
