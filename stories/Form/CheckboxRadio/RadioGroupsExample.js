import React, { Component } from "react";

import { Row, Col, Form, FormGroup, Label, Input, FormText } from "../../../src";

class RadioGroupsExample extends Component {
    render() {
        return (
            <Row className="m-5">
                <Col md={5}>
                    <fieldset>
                        <legend>Radio</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input
                                    id="radio1"
                                    name="group1"
                                    type="radio"
                                    defaultChecked
                                />
                                <Label for="radio1" check>
                                    Opzione 1
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio2" name="group1" type="radio" />
                                <Label for="radio2" check>
                                    Opzione 2
                                </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input
                                    id="radio3"
                                    name="group1"
                                    type="radio"
                                    disabled
                                />
                                <Label for="radio3" check>
                                    Opzione 3
                                </Label>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
                <Col md={2} />
                <Col md={5}>
                    <fieldset>
                        <legend>Radio</legend>
                        <Form>
                            <FormGroup check className="form-check-group">
                                <Input
                                    id="radio4"
                                    name="group2"
                                    type="radio"
                                    defaultChecked
                                />
                                <Label for="radio4" check>
                                    Opzione 1
                                </Label>
                                <FormText color="">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas molestie libero
                                </FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input id="radio5" name="group2" type="radio" />
                                <Label for="radio5" check>
                                    Opzione 2
                                </Label>
                                <FormText color="">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas molestie libero
                                </FormText>
                            </FormGroup>
                            <FormGroup check className="form-check-group">
                                <Input
                                    id="radio6"
                                    name="group2"
                                    type="radio"
                                    disabled
                                />
                                <Label for="radio6" check>
                                    Opzione 3
                                </Label>
                                <FormText color="">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas molestie libero
                                </FormText>
                            </FormGroup>
                        </Form>
                    </fieldset>
                </Col>
            </Row>
        );
    }
}

export default RadioGroupsExample;
