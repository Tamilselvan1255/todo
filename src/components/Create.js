import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import List from "./List";

const Create = () => {
    const [state, setState] = useState("")
    const [item, setItem] = useState([])
    const reference = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();
        if (state.trim()) {
            const duplicate = item && item.some(res => res.title === state)
            if (duplicate) {
                alert("Duplicate entry found!")
            } else {
                let val = [...item, { title: state }]
                setItem(val)
                setState("")
            }
        }
    }

    useEffect(() => {
        reference.current.focus()
    }, [])

    return (
        <div className="d-flex justify-content-center">
            <Form>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col md={8} className="d-flex justify-content-center align-items-center">
                                <input ref={reference} type="text" placeholder="Enter your name" value={state} onChange={(e) => setState(e.target.value)} />
                            </Col>
                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                <Button onClick={handleClick} type="submit">submit</Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <List item={item} setItem={setItem} />
                    </Card.Body>
                </Card>
            </Form>
        </div>
    );
}
export default Create;