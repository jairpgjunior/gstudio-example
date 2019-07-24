ï»¿import React from 'react';
import './component_2.css';


export default class Component_2 extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent component_2">
          <div className="pd-onhover component_2-_hover-4">
              <div className="component_2-0-0">
                  <div className="component_2-nuconta_-8">NuConta</div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="component_2-default-6">
                  <div className="component_2-1-0-0">
                      <div className="component_2-nuconta_-9">NuConta</div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
