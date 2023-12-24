import { FC, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css"
import classNames from "classnames";
import { store } from "../../redux";
import { authenticate } from "../../redux/slices/auth-slice";
import axios from "axios";
import { baseUrl } from "../../consts";
import { useQuery } from "@tanstack/react-query"

const Chip: FC<{ selected: boolean, text: string, onClick: () => void }> = (props) => {
  return (
    <span onClick={props.onClick} className={classNames(styles.chip, {
      [styles.active]: props.selected
    })}>
      {props.text}
    </span>
  )
}

export function AuthPage() {
  const navigate = useNavigate()


  const { data: stations } = useQuery({
    queryKey: ["get-stations"],
    queryFn: async () => {
      const data = await axios.get(`${baseUrl}stations`);
      return data.data;
    }
  })


  const [isAdmin, setIsAdmin] = useState(false)
  const [station, setStation] = useState(1)

  const handleAuthenticate = () => {
    store.dispatch(authenticate({
      type: isAdmin ? 'admin' : 'popusk',
      allowedStation: isAdmin ? null : station
    }))

    navigate('/')
  }

  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <Container className="d-flex" style={{ height: '700px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Body></Card.Body>
        </Card>
        <Card style={{ width: '100%' }}>
          <Card.Body style={{ padding: '70px 100px' }}>
            <Form style={{ marginTop: '100px' }}>
              <Row className="mb-3 border-bottom mx-1 pb-2">
                <h4>Вход</h4>
              </Row>
              <FloatingLabel label="Станция" className='mb-4' hidden={isAdmin}>
                <Form.Select size="sm" defaultValue={station} onChange={(ev) => setStation(Number(ev.target.value))}>
                  {stations?.map((i: any) => (
                    <option value={i.id} key={i.id} >{i.title}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel label="Login" className="mb-3">
                <Form.Control size="sm" type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control size="sm" type="password" placeholder="Password" />
              </FloatingLabel>

              <Row>
                <Col xs={9}>
                  <div className="">
                    Войти как <Chip text="администратор" selected={isAdmin} onClick={() => setIsAdmin(true)} /> / <Chip text="сотрудник" selected={!isAdmin} onClick={() => setIsAdmin(false)} />
                  </div>
                </Col>
                <Col xs={1}>
                  <Button onClick={handleAuthenticate}>
                    Войти
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}