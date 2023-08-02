import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const List = (props) => {
    const { item, setItem } = props;
    const [edit, setEdit] = useState("")
    const [edit1, setEdit1] = useState("")
    const [view, setView] = useState(false)

    const handleDelete = (i) => {
        let val = item.filter((res, data) => data !== i)
        setItem(val)
    }


    const clearAll = () => {
        setItem("")
        setView(false);
    }

    const handleEdit = (res) => {
        setEdit(res.title)
        setEdit1(res.title)
        setView(true)
    }

    const handleChange = (e) => {
        setEdit(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit.trim()) {
            const duplicate = item && item.some(res => edit === res.title)
            if (duplicate) {
                alert("Duplicate entry found!")
            } else {
                let result = [...item];
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title === edit1) {
                        result[i].title = edit
                    }
                }
                setItem(result);
                setView(false);
                alert("Successfully changed")
            }
        }
    }

    return (
        <div>
            {item && item.map((res, i) =>
                <Card key={i}>
                    <Card.Body>
                        <Row>
                            <Col md={6} className="d-flex justify-content-center align-items-center">
                                {res.title}
                            </Col>
                            <Col md={3} className="d-flex justify-content-center align-items-center">
                                <Button onClick={(e) => handleDelete(i)} variant="danger">delete</Button>
                            </Col>
                            <Col md={3} className="d-flex justify-content-center align-items-center">
                                <Button onClick={(e) => handleEdit(res)} variant="warning">edit</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            )}

            {!view ? null :
                <div>
                    <Row>
                        <Col md={8} className="d-flex justify-content-center align-items-center my-2">
                            <input type="text" value={edit} onChange={(e) => handleChange(e.target.value)} />
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center my-2">
                            <Button onClick={handleSubmit} variant="success" type="submit">submit</Button>
                        </Col>
                    </Row>
                </div>
            }

            {item?.length === 0 ? null :
                <div>
                    <Button className="w-100" variant="dark" onClick={clearAll}>clear all</Button>
                </div>
            }
        </div>
    );
}
export default List;