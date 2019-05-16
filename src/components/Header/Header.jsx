import React from 'react';
const Header = (props) => {
    console.log ('Header props', props);
    return(
        <React.Fragment>
            <header className={`header`}>
                <a className="link"
                    href="https://neo-containers.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >firebaseapp</a>
                &nbsp;|&nbsp;
                <a className="link"
                    href="https://rexlabsio.github.io/neo-containers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >docs</a>
                &nbsp;|&nbsp;
                <a className="link"
                    href="https://github.com/rexlabsio/neo-containers"
                    target="_blank"
                    rel="noopener noreferrer"
                >repo</a>
            </header>
        </React.Fragment>
    );
};
export default Header;