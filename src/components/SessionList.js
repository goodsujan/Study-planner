function SessionList({ sessions, deleteSession, setEditSession }) {
    return (
        <ul>
            {sessions.map((s) => (
                <li key={s.id}>
                    <span>
                        {s.title} — {s.duration} min on {s.date} at {s.time}
                    </span>
                    <button onClick={() => setEditSession(s)}>✏</button>
                    <button onClick={() => deleteSession(s.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
}

export default SessionList;