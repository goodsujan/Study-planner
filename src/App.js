import { useState, useEffect } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import { generateSmartSchedule } from "./utils/scheduler";
import { loadFromStorage, saveToStorage } from "./utils/localStorage";

function App() {
  const [sessions, setSessions] = useState(() => loadFromStorage("sessions"));
  const [subjects, setSubjects] = useState(() => loadFromStorage("subjects"));
  const [editSession, setEditSession] = useState(null);
  const [dailyPlan, setDailyPlan] = useState([]);
  const [availableTime, setAvailableTime] = useState(180);

  useEffect(() => {
    saveToStorage("sessions", sessions);
  }, [sessions]);


  useEffect(() => {
    saveToStorage("subjects", subjects);
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

  const updateSession = (id, updated) => {
    setSessions(
      sessions.map((s) =>
        s.id === id ? { ...s, ...updated } : s
      )
    );
  };

  return (
    <Layout>
      <Header />

      <SessionForm
        addSession={addSession}
        editData={editSession}
        updateSession={updateSession}
        clearEdit={() => setEditSession(null)}
      />

      <SessionList
        sessions={sessions}
        deleteSession={deleteSession}
        setEditSession={setEditSession}
      />
    </Layout>
  );
}

export default App;