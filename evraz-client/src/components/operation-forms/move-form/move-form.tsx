import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap"
import { operationReasons, operationTypes } from "../../../mock"
import { Select } from "../../inputs/select"
import { FormEventHandler, useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../../../consts"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux"
import { OperationTypes } from "../../../types"
import { useQuery } from "@tanstack/react-query"

export interface IOperationMoveFormProps {
  
}

function OperationMoveForm({  }: IOperationMoveFormProps) {

  const operationTypeId = 2

  const operations = operationTypes.find(s => s.id === operationTypeId)?.operations || []

  const [formId, setFormId] = useState<string | null>(null)

  const {
    parkFirstId,
    parkSecondId,
    stationFirstId,
    stationSecondId,
    trainFirstId,
    type
  } = useSelector((state: RootState) => state.stationOperationReducer)

  const { data: wagonData } = useQuery({
    queryKey: ['get-wagon', trainFirstId]
  })

  const { data: parkFirstData } = useQuery({
    queryKey: ['get-park', parkFirstId]
  })

  const { data: parkSecondData } = useQuery({
    queryKey: ['get-park', parkSecondId]
  })

  const { data: stationFirstData } = useQuery({
    queryKey: ['get-station', stationFirstId]
  })

  const { data: stationSecondData } = useQuery({
    queryKey: ['get-station', stationSecondId]
  })

  const { data: wayFirstData } = useQuery({
    queryKey: ['get-way', parkFirstId]
  })

  const { data: waySecondData } = useQuery({
    queryKey: ['get-way', parkSecondId]
  })

  useEffect(() => {
  
    if (type === OperationTypes.MOVE) {
      axios.get(`${baseUrl}forms/createForm`)
        .then(res => setFormId(res.data.formId))
    }
    else {
      setFormId(null)
    }

  }, [type])

  const handleClose = () => setFormId(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.stopPropagation()
    ev.preventDefault()

    console.log('submit')
  }

  return (
    <Modal show={formId !== null} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        Операция №{formId}
      </Modal.Header>

      <Modal.Body>
        <Form id='form-move-wagon' onSubmit={handleSubmit}>
          <Row className='mb-1'>
            <h5>Перемещение вагона №{wagonData?.inventoryNumber}</h5>
          </Row>

          <Row className='mb-3'>
            <Col className='d-flex gap-2' xs={8}>
              <div>
                {stationFirstData?.title}, Парк {parkFirstData?.name}, путь ({wayFirstData?.name})
              </div>
              <div>
                →
              </div>
              <div>
              {stationSecondData?.title}, Парк {parkSecondData?.name}, путь ({waySecondData?.name})
              </div>
            </Col>
          </Row>

          <Row>
            <FormGroup as={Col}>
              <Form.Label>Начало операции</Form.Label>
              <Form.Control type="datetime-local" />
            </FormGroup>
            <FormGroup as={Col}>
              <Form.Label>Окончание операции</Form.Label>
              <Form.Control type="datetime-local" />
            </FormGroup>
          </Row>

          <Row className='pt-2 mt-3 mb-3 border-top'>
            <FormGroup as={Col}>
              <Form.Label>Тип операции</Form.Label>
              <Select selected={operationTypeId} disabled data={operationTypes} mapper={i => ({
                value: i.id,
                text: i.name
              })} />
            </FormGroup>

            <FormGroup as={Col}>
              <Form.Label>Операция</Form.Label>
              <Select selected={6} disabled data={operations} mapper={i => ({
                value: i.id,
                text: i.name
              })} />
            </FormGroup>

            <FormGroup as={Col}>
              <Form.Label>Причина</Form.Label>
              <Select selected={6} data={operationReasons} mapper={i => ({
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
        <Button variant="primary" type="submit" form='form-move-wagon'>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { OperationMoveForm }