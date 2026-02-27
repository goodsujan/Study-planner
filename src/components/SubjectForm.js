import React, { useState } from 'react';

const SubjectForm = ({ onAddSubject }) => {
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!subject.trim()) return;

        onAddSubject(subject);
        setSubject('');
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <h3>Add New Subject</h3>

            <input
                type="text"
                placeholder="Enter subject name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={styles.input}
                required
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