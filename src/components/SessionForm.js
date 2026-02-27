import React, { useState } from 'react';

const SessionForm = ({ onAddSession }) => {
    const [form, setForm] = useState({
        subject: '',
        date: '',
        time: '',
        duration: '',
        notes: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.subject || !form.date || !form.time || !form.duration) return;

        onAddSession(form);
        setForm({ subject: '', date: '', time: '', duration: '', notes: '' });
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <h3>Plan Study Session</h3>

            <input
                name="subject"
                placeholder="Subject name"
                value={form.subject}
                onChange={handleChange}
                style={styles.input}
            />

            <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                style={styles.input}
            />

            <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                style={styles.input}
            />

            <input
                name="duration"
                type="number"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={handleChange}
                style={styles.input}
            />

            <textarea
                name="notes"
                placeholder="Notes (optional)"
                value={form.notes}
                onChange={handleChange}
                style={styles.textarea}
            />

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