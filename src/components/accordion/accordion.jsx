import React from 'react';

class AccordionItem extends React.Component {
    render() {
        const { number, accordionText, isOpen } = this.props;
        const collapseId = `collapse${number}`;

        const textWithLineBreaks = accordionText.split('\n').map((line, index) => (
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
                        ARTICULO {number}.
                    </button>
                </h2>
                <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        {textWithLineBreaks}
                    </div>
                </div>
            </div>
        );
    }
}

export default AccordionItem;

