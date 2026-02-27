import { useState, useEffect } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import { getStoredSubjects, storeSubjects } from './utils/localStorage';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSubjects(getStoredSubjects());
  }, []);

  useEffect(() => {
    storeSubjects(subjects);
  }, [subjects]);

  const addSubject = (name) => {
    const newSubject = {
      id: Date.now(),
      name
    };
    setSubjects([...subjects, newSubject]);
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
  };

  const editSubject = (subject) => {
    setEditItem(subject);
  };

  const updateSubject = (id, newName) => {
    setSubjects(
      subjects.map(sub =>
        sub.id === id ? { ...sub, name: newName } : sub
      )
    );
    setEditItem(null);
  };

  const addSession = (session) => {
    const newSession = {
      id: Date.now(),
      ...session
    };
    setSessions([...sessions, newSession]);
  };

  const deleteSession = (id) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  return (
    <Layout>
      <Header />

      <SubjectForm
        onAddSubject={addSubject}
        editItem={editItem}
        onUpdate={updateSubject}
      />

      <SubjectList
        subjects={subjects}
        onDelete={deleteSubject}
        onEdit={editSubject}
      />

      <SessionForm onAddSession={addSession} />
      <SessionList sessions={sessions} onDelete={deleteSession} />
    </Layout>
  );
}

export default App;