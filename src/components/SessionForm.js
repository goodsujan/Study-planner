import React from 'react';

const SessionForm = () => {
    return (
        <form style={styles.form}>
            <h3>Plan Study Session</h3>

            <input
                type="text"
                placeholder="Subject name"
                style={styles.input}
            />

            <input
                type="date"
                style={styles.input}
            />

            <input
                type="time"
                style={styles.input}
            />

            <input
                type="number"
                placeholder="Duration (minutes)"
                style={styles.input}
            />

            <textarea
                placeholder="Notes (optional)"
                style={styles.textarea}
            ></textarea>

            <button type="submit" style={styles.button}>
                Add Session
            </button>
        </form>
    );
};

const styles = {
    form: {
        background: '#fefce8',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '30px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1'
    },
    textarea: {
        width: '100%',
        padding: '10px',
        height: '70px',
        marginBottom: '10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1'
    },
    button: {
        padding: '10px 15px',
        background: '#16a34a',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
    }
};

export default SessionForm;