import React from 'react';
import './EmailForm.css';

export default class EmailForm extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        message: ""
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const inputName = target.name;
        
        this.setState({
            [inputName]: value
        });
    }

    onSave(event) {
        event.preventDefault();
        fetch('/api/mail', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(console.log(this.state))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="email">
                <form onSubmit={(event) => this.onSave(event)} >
                    <label>First Name</label>
                    <input required type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(event) => this.handleInputChange(event)}/>

                    <label>Last Name</label>
                    <input required type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(event) => this.handleInputChange(event)}/>

                    <label>Message</label>
                    <textarea required id="subject" name="message" placeholder="Write something.." onChange={(event) => this.handleInputChange(event)}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}