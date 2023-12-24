import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { baseUrl } from "../../consts";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export interface IApproveFormProps {
    id: number,
    state: boolean,
    onClose: () => void
}

export function ApproveForm({ id, state, onClose }: IApproveFormProps) {

    const [value, setValue] = useState('')
    const firstTry = useRef(true)

    const queryClient = useQueryClient()

    const reviewForm = useMutation({
        mutationKey: ['review-form', id],
        mutationFn: async() => {
          const response = await axios.post(`${baseUrl}forms/formReview`, { formId: id, accepted: true, comment:  value, reviewerId: 0});
          return response.data;
        }
    })

    const onClick = useCallback(() => {
        reviewForm.mutate()
    }, [reviewForm])

    useEffect(() => {
        if(!reviewForm.isPending && !firstTry.current) {
            queryClient.refetchQueries();
            onClose();
        }
        firstTry.current = false
    }, [reviewForm.isPending, queryClient])

    return (
        <Modal show={state} onHide={onClose}>
            <Modal.Header closeButton>
                Одобрить форму №{id}
            </Modal.Header>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Комментарий</Form.Label>
                <Form.Control value={value} onChange={({target}) => {setValue(target.value)}} placeholder="Комментарий..." />
            </Form.Group>
                <Button style={{background: '#f57f29'}} onClick={onClick} >Одобрить</Button>
            </Modal.Body>
        </Modal>
    )
}