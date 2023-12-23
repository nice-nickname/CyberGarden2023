import { Col, Form, FormGroup, Row } from "react-bootstrap"
import { operationReasons, operationTypes } from "../../../mock"
import { Select } from "../../inputs/select"

export interface IOperationMoveFormProps {
    formId: string,
    vagonNumber: string
}


function OperationMoveForm({ formId, vagonNumber }: IOperationMoveFormProps) {

    const operationTypeId = 2

    const operations = operationTypes.find(s => s.id === operationTypeId)?.operations || []

    return (
        <Form id={formId} onSubmit={(ev) => {
            ev.preventDefault()

        }}>
            <Row className='mb-1'>
              <h5>Перемещение вагона №{vagonNumber}</h5>
            </Row>
            
            <Row className='mb-3'>
                <Col className='d-flex gap-2' xs={8}>
                    <div>
                        Бебра, Парк Аахха, путь (XX)
                    </div>
                    <div>
                        →
                    </div>
                    <div>
                        Бебриус, парк Привеее, путь (PP)
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
    )
}

export { OperationMoveForm }