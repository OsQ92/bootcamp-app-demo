import React from 'react';
import MessageBox from './MessageBox';
import {EmailFormContainer} from './EmailForm.styled';
import ReCAPTCHA from "react-google-recaptcha";

export default class EmailForm extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
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
        this._reCaptchaRef = React.createRef();
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
                    message: "Message delivered", 
                    showMessage: true}); 
            } else { 
                this.setState({
                    message: "Message delivery failed", 
                    showMessage: true
                }); 
            }
        })
        .catch(err => {
            this.setState({
                message: "Message delivery failed", 
                showMessage: true
            });
            console.log(err)});
    }

    onChange = value => {
        value ? this.setState({confirmed: true}) : 
                this.setState({confirmed: false})
        
        console.log(this.state.confirmed)
        console.log(this.value)
    }
      closeModal() {
        this.setState({ showMessage: false });
    }

    asyncScriptOnLoad = () => {
        this.setState({ callback: "called!" });
        console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
      };

    render() {
        let button = this.state.confirmed ?
            (<button type="submit">Send</button>) : null;
        return (
            <EmailFormContainer>
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
                    
                    {button}    
                </form>
                <ReCAPTCHA
                        ref={this._reCaptchaRef}
                        sitekey=""
                        onChange={ this.onChange }
                        asyncScriptOnLoad={this.asyncScriptOnLoad}
                />
            <MessageBox 
                message={this.state.message} 
                open={this.state.showMessage} 
                close={() => this.closeModal()}>
            </MessageBox>
            </EmailFormContainer>
       );
    }
}