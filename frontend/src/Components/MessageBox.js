//https://react-popup.elazizi.com/introduction/
import React from 'react';
import Popup from 'reactjs-popup';
import {MsgBoxContainer} from './MessageBox.styled'

export default class MessageBox extends React.Component {
    render() {
      return (
        <div>
          <MsgBoxContainer>
            <Popup
              open={this.props.open}
              closeOnDocumentClick
              onClose={this.props.close}
            >
              <div className="modal">
                <div className="close" onClick={this.props.close}>
                  x
                </div>
                <div className="header">INFO</div>
                <div className="content">
                  <span>{this.props.message}</span>
                </div>
              </div>
            </Popup>
          </MsgBoxContainer>
        </div>
      );
    }
  }
