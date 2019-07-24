import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import './ContactDetails.css';

const ContactDetails = () => {
	return (
		<Spring
			from={{ opacity: 0, transform: 'translate3d(0,50%,0)' }}
			to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
			config={config.stiff}
		>
			{props => (
				<section style={props} className="contact-details">
					<div className="contact-container">
						<div className="contact-item">
							<a href="mailto:mike@michaelwebermusic.com">
								<svg
									className="contact-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-mail"
								>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								<span className="link-text">Email</span>
							</a>
						</div>
						<div className="contact-item">
							<a
								href="https://twitter.com/iammichaelweber"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									className="contact-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-twitter"
								>
									<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
								</svg>
								<span className="link-text">Twitter</span>
							</a>
						</div>
						<div className="contact-item">
							<a
								href="https://www.instagram.com/michaelwebermusic/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									className="contact-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-instagram"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
								</svg>
								<span className="link-text">Instagram</span>
							</a>
						</div>
					</div>
				</section>
			)}
		</Spring>
	);
};

export default ContactDetails;
