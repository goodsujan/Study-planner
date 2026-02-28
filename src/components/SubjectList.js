function SubjectList({ subjects, deleteSubject, setEditSubject, editSubjectItem }) {
    if (subjects.length === 0) {
        return <div className="empty-state">No subjects yet. Create one above!</div>;
    }

    return (
        <div className="list-container">
            {subjects.map((sub) => (
                <div
                    key={sub.id}
                    className={`item-card ${editSubjectItem?.id === sub.id ? 'editing' : ''}`}
                >
                    <div className="item-info">
                        <div className="item-title">{sub.name}</div>
                        <div className="item-meta">
                            <span className="badge badge-green">Subject</span>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button
                            className="btn-icon btn-edit"
                            onClick={() => setEditSubject(sub)}
                            title="Edit Subject"
                        >
                            ✏️
                        </button>
                        <button
                            className="btn-icon btn-delete"
                            onClick={() => deleteSubject(sub.id)}
                            title="Delete Subject"
                        >
                            🗑️
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubjectList;