import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { baseUrl } from "../../consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./station-modal.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export interface IStationModalProps {
  id: number | null;
  onClose: () => void;
}

export function StationModal({ id, onClose }: IStationModalProps) {
  const { data } = useQuery({
    queryKey: ["get-station", id],
    queryFn: async () => {
      if (!id) return null;
      const response = await axios.get(`${baseUrl}stations/${id}`);
      return response.data;
    },
  });

  const navigate = useNavigate()

  const allowedStation = useSelector((state: RootState) => state.authReducer.allowedStation)

  const allowTransition = allowedStation === null || allowedStation === id

  const handleClick = () => {
    navigate(`/station/${id}`)
  }

  return (
    <Modal show={!!id} onHide={onClose}>
      <Modal.Header closeButton>{data?.title}</Modal.Header>
      <Modal.Body>
        {
          allowTransition
            ? <>Совершить переход на данную станцию?</>
            : <>Вы не обладаете правами для перехода на эту станцию</>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClick} disabled={!allowTransition}>
          Перейти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
