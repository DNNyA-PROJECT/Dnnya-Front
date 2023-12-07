import React from 'react';

const componentComment = ({ titulo, placeholder }) => {
    const handleFileChange = (e) => {
        const fileNameDisplay = document.getElementById('fileName');
        if (e.target.files.length > 0) {
            fileNameDisplay.innerHTML = 'Archivo seleccionado: ' + e.target.files[0].name;
        } else {
            fileNameDisplay.innerHTML = '';
        }
    };

    const openFileInput = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <>
            <div className='container-fluid text-start d-flex mt-5 fs-2 fw-bolder w-75' style={{ backgroundColor: window.themeColors.boxnewColor }}>
                {titulo}
            </div>
            <div style={{ position: "relative" }}>
                <form action="">
                    <button type='reset' className='btn' style={{ position: "absolute", top: 0, right: '13vw' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <textarea name="mensaje" className='form-control rounded-0 w-75 container-fluid align-items-center' rows="10" cols="60" placeholder={placeholder}></textarea>
                    <div className='d-flex' style={{ position: "absolute", bottom: '1vw', right: '30vw' }}>
                        <div className="px-3">
                            <input
                                type="file"
                                id="fileInput"
                                className="d-none"
                                onChange={handleFileChange}
                            />

                            <button
                                className="btn h-100"
                                onClick={openFileInput}
                                type='button'
                                style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} >
                                SUBIR ARCHIVOS
                            </button>

                            <p id="fileName"></p>
                        </div>
                        <button type='button' className='btn' style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} >GUARDAR</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default componentComment;
