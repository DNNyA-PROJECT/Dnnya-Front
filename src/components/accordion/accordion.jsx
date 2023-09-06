import React from 'react';

function accordion() {
    class AccordionItem extends React.Component {
        render() {
          const { numero, textoAcordeon, isOpen } = this.props;
          const collapseId = `collapse${numero}`;
      
          const textoConSaltosDeLinea = textoAcordeon.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ));
      
          return (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={collapseId}
                >
                  ARTÍCULO {numero}.
                </button>
              </h2>
              <div
                id={collapseId}
                className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {textoConSaltosDeLinea}
                </div>
              </div>
            </div>
          );
        }
      }
}
export default accordion
