import { Modal } from "react-bootstrap"
import OperationList from "../../operation-list/OperationList"
import { useState } from "react";

function OperationListModal() {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show} size={'xl'} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Список операций</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OperationList />
            </Modal.Body>
        </Modal>
    )
}

export default OperationListModal