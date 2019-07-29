import React from 'react';
import './multistate_component.css';


export default class Multistate_component extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent multistate_component">
          { (this.props.state === "default") ?
              <div className="multistate_component-default-1">
                  <div className="multistate_component-0-0-0">
                      <div className="multistate_component-rectangle_2">
                          <div className="multistate_component-0-0-0-0-0">
                              <div className="multistate_component-quero_ser_nubank_-6">
                                  Quero ser NuBank
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover multistate_component-_hover-3">
              <div className="multistate_component-1-0">
                  <div className="multistate_component-rectangle_2-7">
                      <div className="multistate_component-1-0-0-0">
                          <div className="multistate_component-quero_ser_nubank_-4">
                              Quero ser NuBank
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
