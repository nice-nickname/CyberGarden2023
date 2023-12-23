import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export interface IOperationModalProps {
    children: JSX.Element,
    title: string,

    onSave: Function,
    state: boolean,
    formId: string
}

function OperationModal(props: IOperationModalProps) {
    const { 
        children,
        title, 
        onSave, 
        state,
        formId
    } = props

    const [show, setShow] = useState(state)


    const handleSave = () => {
        onSave()

        setShow(false)
    }
    const handleClose = () => setShow(false)

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                {title}
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" type="submit" onClick={handleSave} form={formId}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export { OperationModal }