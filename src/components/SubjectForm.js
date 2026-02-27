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
            updateSubject(editSubject.id, { ...editSubject, name });
            clearEdit();
        } else {
            addSubject({ id: Date.now(), name });
        }

        setName("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input
                type="text"
                placeholder="Subject Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">{editSubject ? "Update Subject" : "Add Subject"}</button>
        </form>
    );
}

export default SubjectForm;