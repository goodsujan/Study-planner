function SessionList({ sessions, deleteSession, setEditSession, editSessionItem }) {
    if (sessions.length === 0) {
        return <div className="empty-state">No sessions found. Start by adding one!</div>;
    }

    return (
        <div className="list-container">
            {sessions.map((s) => (
                <div
                    key={s.id}
                    className={`item-card ${editSessionItem?.id === s.id ? 'editing' : ''}`}
                >
                    <div className="item-info">
                        <div className="item-title">{s.title}</div>
                        <div className="item-meta">
                            <span className="icon-text">📅 {s.date}</span>
                            <span className="icon-text">⏰ {s.time}</span>
                            <span className="badge badge-blue">{s.duration} min</span>
                        </div>
                        {s.notes && (
                            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '4px' }}>
                                📝 {s.notes}
                            </div>
                        )}
                    </div>
                    <div className="action-buttons">
                        <button
                            className="btn-icon btn-edit"
                            onClick={() => setEditSession(s)}
                            title="Edit Session"
                        >
                            ✏️
                        </button>
                        <button
                            className="btn-icon btn-delete"
                            onClick={() => deleteSession(s.id)}
                            title="Delete Session"
                        >
                            🗑️
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SessionList;