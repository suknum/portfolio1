import React from 'react';


function Footer() {

    return (
        <footer>
            <div style={styles.footer}>
                <p>© 2025. All rights reserved.</p>
            </div>
        </footer>
    );
}


const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px 0',
        width: '100%',
        fontSize: '0.8rem',
        color : '#fff',


    },
}

export default Footer;