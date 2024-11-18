import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/atcodersairam/"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/gulshancodes/redux-shopping-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://gulshansongara.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                           Sairam B N
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;