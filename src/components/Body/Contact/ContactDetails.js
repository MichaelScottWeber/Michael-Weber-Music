import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(0,50%,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={ config.stiff }
        >
            {props => (
                <section
                    style={props}
                    className="contact-details"
                >
                    <p>Email</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </section>
            )}
        </Spring>
    )
}

export default ContactDetails;