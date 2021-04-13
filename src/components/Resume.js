import React from 'react';

function Resume() {
    return (
        <>
            <div className="page">
                <img className="picture" src="../../images/portraitResize.jpg" alt="profile image" width="200vw" height="300vh"></img>
                <div className="text">
                    <h2>Resume</h2>
                    <p>
                        Download Susan's most up-to-date resume!
                </p>
                    <div className="downloads">
                        <a href="../../files/Ashmore_Dev_Resume_2021.pdf" download>⬇ PDF</a>
                        <a href="../../files/Ashmore_Dev_Resume_2021.docx" download>⬇ DOCX</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume