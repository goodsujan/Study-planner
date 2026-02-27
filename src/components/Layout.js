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
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px'
    }
};

export default Layout;