import { Modal } from "react-bootstrap"
import { OperationList } from "../../operation-list"

export interface IOperationListModalProps {
    onClose: () => void,
    state: boolean,
}

function OperationListModal({ onClose, state }: IOperationListModalProps) {

    return (
        <Modal show={state} size={'xl'} onHide={() => onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Список операций</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OperationList />
            </Modal.Body>
        </Modal>
    )
}

export { OperationListModal }