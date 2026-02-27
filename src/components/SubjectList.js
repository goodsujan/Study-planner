import React from 'react';

const SubjectList = ({ subjects, onDelete, onEdit }) => {
    if (subjects.length === 0) {
        return <p style={styles.empty}>No subjects added yet.</p>;
    }

    return (
        <div style={styles.list}>
            {subjects.map((sub) => (
                <div key={sub.id} style={styles.item}>
                    <span>{sub.name}</span>
                    <div>
                        <button
                            onClick={() => onEdit(sub)}
                            style={styles.editBtn}
                        >
                            ✏️
                        </button>
                        <button
                            onClick={() => onDelete(sub.id)}
                            style={styles.deleteBtn}
                        >
                            ❌
                        </button>
                    </div>
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
    editBtn: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '16px',
        marginRight: '6px'
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