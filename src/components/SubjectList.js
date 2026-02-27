function SubjectList({ subjects, deleteSubject, setEditSubject }) {
    return (
        <ul>
            {subjects.map((sub) => (
                <><li key={sub.id}>
                    <span>{sub.name}</span>
                    <button onClick={() => setEditSubject(sub)}>✏</button>
                    <button onClick={() => deleteSubject(sub.id)}>❌</button>
                </li><li
                    className={setEditSubject?.id === sub.id ? "editing" : ""}
                >
                        ...
                    </li></>
            ))}
        </ul>
    );
}

export default SubjectList;