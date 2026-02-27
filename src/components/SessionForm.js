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
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input
                type="text"
                name="title"
                placeholder="Session Title"
                value={form.title}
                onChange={handleChange}
            />
            <input type="date" name="date" value={form.date} onChange={handleChange} />
            <input type="time" name="time" value={form.time} onChange={handleChange} />
            <input
                type="number"
                name="duration"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={handleChange}
            />
            <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange}></textarea>

            <button type="submit">{editSession ? "Update Session" : "Add Session"}</button>
        </form>
    );
}

export default SessionForm;