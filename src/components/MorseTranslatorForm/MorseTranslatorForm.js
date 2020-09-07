import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class MorseTranslatorForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="message">
                    <Form.Label>Message to translate</Form.Label>
                    <Form.Control type="text" placeholder="Enter a message" value={this.props.message} onChange={this.props.onMessageChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form >
        )
    }
}

export default MorseTranslatorForm;