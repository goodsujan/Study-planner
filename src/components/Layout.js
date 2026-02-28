import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={styles.container}>
            {children}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px'
    }
};

export default Layout;