import React from 'react';

const componentComment = ({ titulo, placeholder }) => {
    return (
        <>
            <div className='container-fluid text-start d-flex mt-5 fs-2 fw-bolder w-75' style={{ backgroundColor: window.themeColors.boxnewColor }}>
                {titulo}
            </div>
            <div>
                <textarea name="mensaje" className='form-control rounded-0 w-75 container-fluid align-items-center' rows="4" cols="50" placeholder={placeholder}></textarea>
            </div>
        </>
    );
}

export default componentComment;
