import React from 'react';

const SubjectList = ({ subjects }) => {
    if (subjects.length === 0) {
        return <p style={styles.empty}>No subjects added yet.</p>;
    }

    return (
        <div style={styles.list}>
            {subjects.map((sub) => (
                <div key={sub.id} style={styles.item}>
                    {sub.name}
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
        marginBottom: '8px'
    },
    empty: {
        textAlign: 'center',
        color: '#64748b'
    }
};

export default SubjectList;