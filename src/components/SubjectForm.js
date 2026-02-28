import { useState, useEffect } from "react";

function SubjectForm({ addSubject, editSubject, updateSubject, clearEdit }) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (editSubject) setName(editSubject.name);
    }, [editSubject]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        if (editSubject) {
            updateSubject(editSubject.id, { ...editSubject, name: name.trim() });
            clearEdit();
        } else {
            addSubject({ id: Date.now(), name: name.trim() });
        }

        setName("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
                <input
                    type="text"
                    placeholder="New Subject..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ flex: 1 }}
                    required
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                    {editSubject ? "💾 Update" : "➕ Add"}
                </button>
            </div>
            {editSubject && (
                <button
                    type="button"
                    onClick={clearEdit}
                    style={{ background: 'transparent', color: '#64748b', fontSize: '0.85rem', border: 'none', cursor: 'pointer', padding: '4px 0 0 0' }}
                >
                    Cancel editing
                </button>
            )}
        </form>
    );
}

export default SubjectForm;