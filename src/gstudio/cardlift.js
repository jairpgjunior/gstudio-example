import React from 'react';
import Component_1 from './component_1';
import Component_2 from './component_2';
import Pd2275549558422565 from './component';
import './cardlift.css';


export default class Cardlift extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent cardlift">
          <div className="pd-onhover cardlift-_hover-3">
              <div className="cardlift-0-0">
                  <div className="cardlift-component_1">
                      <Component_1 /> 
                  </div>
              </div>
              <div className="cardlift-0-1">
                  <div className="cardlift-component_2">
                      <Component_2 /> 
                  </div>
              </div>
              <div className="cardlift-0-2">
                  <div className="cardlift-unnamed_instance_2">
                      <Pd2275549558422565 /> 
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="cardlift-default-8">
                  <div className="cardlift-1-0-0">
                      <img src={this.props.img_src} className="cardlift-image-3" /> 
                  </div>
                  <div className="cardlift-1-0-1">
                      <div className="cardlift-component_1_">
                          <Component_1 /> 
                      </div>
                  </div>
                  <div className="cardlift-1-0-2">
                      <div className="cardlift-component_2_">
                          <Component_2 /> 
                      </div>
                  </div>
                  <div className="cardlift-1-0-3">
                      <div className="cardlift-unnamed_instance_2-9">
                          <Pd2275549558422565 /> 
                      </div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
