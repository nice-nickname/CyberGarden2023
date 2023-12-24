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

  const handleClick = () => {
    navigate(`/station/${id}`)
  }

  return (
    <Modal show={!!id} onHide={onClose}>
      <Modal.Header closeButton>{data?.title}</Modal.Header>
      <Modal.Footer>
        <Button className={styles.btn} onClick={handleClick} disabled={allowedStation === id}>
          Перейти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
