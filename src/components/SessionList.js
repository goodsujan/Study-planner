import React from 'react';

const SessionList = () => {
    return (
        <div style={styles.container}>
            <h3>Planned Study Sessions</h3>
            <p style={styles.empty}>No sessions planned yet.</p>
        </div>
    );
};

const styles = {
    container: {
        marginTop: '20px'
    },
    empty: {
        textAlign: 'center',
        color: '#64748b'
    }
};

export default SessionList;