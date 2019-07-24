ï»¿import React from 'react';
import './produtos.css';


export default class Produtos extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent produtos">
          <div className="pd-onhover produtos-_hover-1">
              <div className="produtos-0-0">
                  <div className="produtos-produtos_-2">Produtos</div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="produtos-default-5">
                  <div className="produtos-1-0-0">
                      <div className="produtos-produtos_-8">Produtos</div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
