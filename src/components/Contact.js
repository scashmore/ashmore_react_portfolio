import React from 'react';

function Contact() {
    return (
        <>
            <div className="contact page">
                <img className="picture" src="../../images/portraitResize.jpg" alt="profile" width="200vw" height="300vh"></img>
                <div className="clickMe text">
                    <h2>Contact</h2>
                    <ul>
                        <li>Phone: <a href="tel:828-553-4465">(828)-553-4465</a></li>
                        <li>Email: <a href="mailto: scashmorecitcom@gmail.com">scashmorecitcom@gmail.com</a></li>
                        <li>Github: <a href="https://github.com/scashmore/Ashmore_Profile">scashmore</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/susan-ashmore-881217a9/">Susan Ashmore</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact