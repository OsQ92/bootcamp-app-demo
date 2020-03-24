//https://css-tricks.com/creating-animations-using-react-spring/

import React from 'react';
import MessageBox from './MessageBox';
import './EmailForm.css';

export default class EmailForm extends React.Component {
    state = {
        confirmed: false,
        message: "",
        showMessage: false,
        email: {
            firstname: "",
            lastname: "",
            subject: "",
            message: ""
        }
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const inputName = target.name;

        this.setState({
            email: {                   // object that we want to update
                ...this.state.email,    // keep all other key-value pairs
                [inputName]: value       // update the value of specific key
            }
        });
        console.log(JSON.stringify(this.state.email));
    }
    
    onSave(event) {
        event.preventDefault();
        fetch('/api/email', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.email)
        })
        .then(response =>  response.json())
        .then(data => {
            if(data.accepted.length){ 
                this.setState({
                    confirmed: true, 
                    message: "Message delivered", 
                    showMessage: true}); 
            } else { 
                this.setState({
                    confirmed: false, 
                    message: "Message delivery failed", 
                    showMessage: true
                }); 
            }
        })
        .catch(err => {
            this.setState({
                confirmed: false, 
                message: "Message delivery failed", 
                showMessage: true
            });
            console.log(err)});
    }
      closeModal() {
        this.setState({ showMessage: false });
    }

    render() {
        return (
            <div className="email">
                <form onSubmit={(event) => this.onSave(event)} >
                    <label>First Name</label>
                    <input required type="text" id="fname" name="firstname" 
                    placeholder="Your first name.." 
                    onChange={(event) => this.handleInputChange(event)}/>

                    <label>Last Name</label>
                    <input required type="text" id="lname" name="lastname" 
                    placeholder="Your last name.." 
                    onChange={(event) => this.handleInputChange(event)}/>

                    <label>Subject</label>
                    <input required type="text" id="subject" name="subject" 
                    placeholder="Title of your message.." 
                    onChange={(event) => this.handleInputChange(event)}/>

                    <label>Message</label>
                    <textarea required id="subject" name="message" 
                    placeholder="Write message.." 
                    onChange={(event) => this.handleInputChange(event)}></textarea>
                    
                    <button type="submit" disabled={this.state.confirmed}>Send</button>      
                </form>
            <MessageBox 
                message={this.state.message} 
                open={this.state.showMessage} 
                close={() => this.closeModal()}>
            </MessageBox>
            </div>
       );
    }
}