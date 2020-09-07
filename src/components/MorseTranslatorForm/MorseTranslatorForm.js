import React, { Component } from 'react';
import { Form, Button, Alert } from "react-bootstrap";

class MorseTranslatorForm extends Component {
    render() {
        const errorMessage = this.props.errorMessage;
        var alert = '';

        if (errorMessage !== "") {
            alert = <Alert variant='danger'> { this.props.errorMessage } </Alert>;
        }

        return (
            <Form onSubmit={this.props.onSubmit}>
                {alert}

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