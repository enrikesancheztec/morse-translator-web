import React, { Component } from 'react';
import MorseTranslatorForm from '../../components/MorseTranslatorForm/MorseTranslatorForm';
import MorseTranslatorHistoryTable from '../../components/MorseTranslatorHistoryTable/MorseTranslatorHistoryTable';
import MorseTranslatorService from "../../services/MorseTranslatorService/MorseTranslatorService";

class MorseTranslator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            history: [],
            counter: 0,
            errorMessage: ''
        };

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Morse Code Online Translator</h1>
                <MorseTranslatorForm message={this.state.message} errorMessage={this.state.errorMessage} onMessageChange={this.handleMessageChange} onSubmit={this.handleMessageSubmit} />
                <br />
                <MorseTranslatorHistoryTable history={this.state.history} />
            </div>
        );
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value });
        event.preventDefault();
    }

    handleMessageSubmit(event) {
        var data = {
            message: this.state.message
        }

        MorseTranslatorService.postMessage(data)
            .then(res => {
                const result = res.data;
                var newHistory = this.state.history;
                var newCounter = this.state.counter + 1;
                result.counter = newCounter;
                newHistory.push(result);
                this.setState({ history: newHistory, counter: newCounter });
            }).catch(err => {
                if (err.response.status === 400) {
                    let errorMessage = err.response.data.error.errors[0].msg;
                    this.setState({ errorMessage: errorMessage });
                }
            })

        this.setState({ message: '', errorMessage: '' });

        event.preventDefault();
    }
}

export default MorseTranslator;