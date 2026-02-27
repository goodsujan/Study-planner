import React from 'react';

const SubjectList = ({ subjects, onDelete }) => {
    if (subjects.length === 0) {
        return <p style={styles.empty}>No subjects added yet.</p>;
    }

    return (
        <div style={styles.list}>
            {subjects.map((sub) => (
                <div key={sub.id} style={styles.item}>
                    <span>{sub.name}</span>
                    <button
                        onClick={() => onDelete(sub.id)}
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
    list: {
        marginTop: '10px'
    },
    item: {
        background: '#e0f2fe',
        padding: '10px',
        borderRadius: '6px',
        marginBottom: '8px',
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
    }
};

export default SubjectList;