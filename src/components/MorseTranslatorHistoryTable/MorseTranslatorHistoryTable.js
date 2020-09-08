import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";

class MorseTranslatorHistoryTable extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Original Message</th>
                            <th>Morse Code Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.history.map((historyItem) =>
                                <tr key={historyItem.counter}>
                                    <td>{historyItem.counter}</td>
                                    <td>{historyItem.original}</td>
                                    <td>{historyItem.translation}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div class="row justify-content-end">
                    <Button variant="secondary" onClick={this.props.onHistoryDelete}>
                        Delete
                    </Button>
                </div>
            </div>
        );
    }
}

export default MorseTranslatorHistoryTable;