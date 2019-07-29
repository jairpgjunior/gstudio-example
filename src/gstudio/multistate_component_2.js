import React from 'react';
import './multistate_component_2.css';


export default class Multistate_component_2 extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent multistate_component_2">
          { (this.props.state === "default") ?
              <div className="multistate_component_2-default-1">
                  <div className="multistate_component_2-0-0-0">
                      <div className="multistate_component_2-quero_ser_nubank_-3">
                          Quero ser NuBank
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover multistate_component_2-default_hover-7">
              <div className="multistate_component_2-1-0">
                  <div className="multistate_component_2-quero_ser_nubank_-8">
                      Quero ser NuBank
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
