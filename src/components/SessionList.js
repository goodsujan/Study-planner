import React from 'react';

const SessionList = ({ sessions, onDelete }) => {
    if (sessions.length === 0) {
        return <p style={styles.empty}>No sessions planned yet.</p>;
    }

    return (
        <div style={styles.container}>
            <h3>Planned Study Sessions</h3>

            {sessions.map((s) => (
                <div key={s.id} style={styles.item}>
                    <div>
                        <strong>{s.subject}</strong><br />
                        {s.date} at {s.time} — {s.duration} min
                        {s.notes && <p style={styles.note}>📝 {s.notes}</p>}
                    </div>

                    <button
                        onClick={() => onDelete(s.id)}
                        style={styles.deleteBtn}
                    >
                        ❌
                    </button>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        marginTop: '20px'
    },
    item: {
        background: '#ecfeff',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deleteBtn: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '16px'
    },
    empty: {
        textAlign: 'center',
        color: '#64748b'
    },
    note: {
        marginTop: '5px',
        fontSize: '13px',
        color: '#475569'
    }
};

export default SessionList;