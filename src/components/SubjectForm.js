import { useState, useEffect } from "react";

function SubjectForm({ addSubject, editData, updateSubject, clearEdit }) {
    const [name, setName] = useState("");

    useEffect(() => {
        if (editData) setName(editData.name);
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;

        if (editData) {
            updateSubject(editData.id, { name });
            clearEdit();
        } else {
            addSubject({
                id: Date.now(),
                name,
            });
        }

        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Subject Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>{editData ? "Update Subject" : "Add Subject"}</button>
        </form>
    );
}

export default SubjectForm;