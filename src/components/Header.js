import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.badge}>Efficiency Optimizer</div>
            <h1 style={styles.title}>Smart Study Planner</h1>
            <p style={styles.subtitle}>Plan precisely. Study deeper. Achieve more.</p>
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: '#fff',
        borderRadius: '16px',
        marginBottom: '2.5rem',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden'
    },
    badge: {
        display: 'inline-block',
        padding: '4px 12px',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        color: '#818cf8',
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1rem',
        border: '1px solid rgba(79, 70, 229, 0.3)'
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
        fontWeight: '800',
        letterSpacing: '-0.04em',
        background: 'linear-gradient(to right, #fff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    subtitle: {
        marginTop: '0.75rem',
        fontSize: '1.1rem',
        color: '#94a3b8',
        fontWeight: '400'
    }
};

export default Header;