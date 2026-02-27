import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>📚 Smart Study Planner</h1>
            <p>Plan smart. Study better. Succeed faster.</p>
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        padding: '20px',
        background: '#1e293b',
        color: '#fff',
        borderRadius: '8px',
        marginBottom: '20px'
    }
};

export default Header;