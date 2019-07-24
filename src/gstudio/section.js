ï»¿import React from 'react';
import './section.css';


export default class Section extends React.Component {
  render() {
    return (
      <div className="section-section-8">
          <div className="section-0">
              <div className="section-0-0" /> 
              <div className="section-0-1">
                  <div className="section-0-1-0">
                      <div className="section-nuconta_-4">
                          { this.props.text }
                      </div>
                  </div>
                  <div className="section-0-1-1">
                      <div className="section-rende_mais_que_a_poupan_a_e_voc_n_o_paga_nada_por_isso_-1">
                          { this.props.text2 }
                      </div>
                  </div>
                  <div className="section-0-1-2">
                      <div className="section-d_bito_entre_na_lista_de_espera_-9">
                          { this.props.text3 }
                      </div>
                  </div>
              </div>
              <div className="section-image_3" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}} /> 
          </div>
      </div>
    );
  }
};
