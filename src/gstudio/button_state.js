ï»¿import React from 'react';
import './button_state.css';


export default class Button_state extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent button_state">
          <div className="pd-onhover button_state-_hover-1">
              <div className="button_state-0-0">
                  <div className="button_state-quero_ser_nubank_-7">
                      Quero ser NuBank
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="button_state-default-3">
                  <div className="button_state-1-0-0">
                      <div className="button_state-quero_ser_nubank_-6">
                          Quero ser NuBank
                      </div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
