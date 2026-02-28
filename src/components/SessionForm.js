import { useState, useEffect } from "react";

function SessionForm({ addSession, editSession, updateSession, clearEdit }) {
    const [form, setForm] = useState({
        title: "",
        date: "",
        time: "",
        duration: "",
        notes: ""
    });

    useEffect(() => {
        if (editSession) {
            setForm(editSession);
        }
    }, [editSession]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.date || !form.time || !form.duration) return;

        if (editSession) {
            updateSession(form.id, form);
            clearEdit();
        } else {
            addSession({ ...form, id: Date.now() });
        }

        setForm({ title: "", date: "", time: "", duration: "", notes: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Session Title"
                    value={form.title}
                    onChange={handleChange}
                    style={{ gridColumn: 'span 2' }}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration (min)"
                    value={form.duration}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn-primary">
                    {editSession ? "💾 Update" : "➕ Add"}
                </button>
            </div>
            <textarea
                name="notes"
                placeholder="Optional notes..."
                value={form.notes}
                onChange={handleChange}
                rows="2"
            ></textarea>
            {editSession && (
                <button
                    type="button"
                    onClick={clearEdit}
                    style={{ background: 'transparent', color: '#64748b', fontSize: '0.85rem', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    Cancel editing
                </button>
            )}
        </form>
    );
}

export default SessionForm;