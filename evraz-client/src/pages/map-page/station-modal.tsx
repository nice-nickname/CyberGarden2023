import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { baseUrl } from "../../consts";
import { Link } from "react-router-dom";
import styles from "./station-modal.module.css";

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

  return (
    <Modal show={!!id} onHide={onClose}>
      <Modal.Header closeButton>{data?.title}</Modal.Header>
      <Modal.Footer>
        <Link className={styles.btn} to={`/${id}`}>
          Перейти
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
