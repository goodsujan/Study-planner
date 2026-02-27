import React from 'react';

const SubjectForm = () => {
    return (
        <form style={styles.form}>
            <h3>Add New Subject</h3>

            <input
                type="text"
                placeholder="Enter subject name"
                style={styles.input}
            />

            <button type="submit" style={styles.button}>
                Add Subject
            </button>
        </form>
    );
};

const styles = {
    form: {
        background: '#f8fafc',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1'
    },
    button: {
        padding: '10px 15px',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
    }
};

export default SubjectForm;