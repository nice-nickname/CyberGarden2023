import { Modal } from "react-bootstrap";
import { OperationList } from "../../operation-list";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../../consts";

export interface IOperationListModalProps {
  onClose: () => void;
  state: boolean;
}

export interface IFormData {
  id: number,
  status: string
}

function OperationListModal({ onClose, state }: IOperationListModalProps) {

  const { data } = useQuery<IFormData[]>({
    queryKey: ['get-forms2'],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}forms`)
      const forms: IFormData[] = []
      
      for (const [key, value] of Object.entries(response.data)) {
        forms.push({
          id: Number(key),
          status: String(value)
        })
      }

      return forms
    }
  })

  if (!data || typeof data?.[0] === 'number') {
    return null
  }

  console.log('ahaha', data)

  return (
    <Modal show={state} size={"xl"} onHide={() => onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Список операций</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <OperationList forms={data} />
      </Modal.Body>
    </Modal>
  );
}

export { OperationListModal };
