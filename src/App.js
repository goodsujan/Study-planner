import { useState, useEffect } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import { loadFromStorage, saveToStorage } from "./utils/localStorage";
import './App.css'; // Ensure CSS is imported

function App() {
  const [sessions, setSessions] = useState(() => loadFromStorage("sessions") || []);
  const [subjects, setSubjects] = useState(() => loadFromStorage("subjects") || []);
  const [editSession, setEditSession] = useState(null);
  const [editSubjectItem, setEditSubjectItem] = useState(null);
  const [sessionSearch, setSessionSearch] = useState("");
  const [subjectSearch, setSubjectSearch] = useState("");
  const [sessionFilter, setSessionFilter] = useState("all");

  // Filter sessions based on search & date
  const filteredSessions = sessions
    .filter((s) => s.title.toLowerCase().includes(sessionSearch.toLowerCase()))
    .filter((s) => {
      const sessionDate = new Date(s.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (sessionFilter === "today") return sessionDate.getTime() === today.getTime();
      if (sessionFilter === "upcoming") return sessionDate > today;
      return true; // all
    });

  // Filter subjects based on search
  const filteredSubjects = subjects.filter((sub) =>
    sub.name.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  useEffect(() => {
    saveToStorage("sessions", sessions);
  }, [sessions]);

  useEffect(() => {
    saveToStorage("subjects", subjects);
  }, [subjects]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const deleteSubject = (id) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      setSubjects(subjects.filter(sub => sub.id !== id));
      if (editSubjectItem?.id === id) setEditSubjectItem(null);
    }
  };

  const editSubject = (subject) => {
    setEditSubjectItem(subject);
  };

  const updateSubject = (id, updatedSubject) => {
    setSubjects(
      subjects.map(sub => (sub.id === id ? { ...sub, ...updatedSubject } : sub))
    );
    setEditSubjectItem(null);
  };

  const addSession = (session) => {
    setSessions([...sessions, session]);
  };

  const deleteSession = (id) => {
    if (window.confirm("Delete this session?")) {
      setSessions(sessions.filter(s => s.id !== id));
      if (editSession?.id === id) setEditSession(null);
    }
  };

  const updateSession = (id, updated) => {
    setSessions(
      sessions.map((s) => (s.id === id ? { ...s, ...updated } : s))
    );
    setEditSession(null);
  };

  return (
    <Layout>
      <Header />

      <div className="search-container animate-fade">
        <h3>🔍 Search & Intelligent Filters</h3>
        <div className="search-grid">
          <div className="input-group">
            <label>Sessions</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Search sessions..."
                value={sessionSearch}
                onChange={(e) => setSessionSearch(e.target.value)}
                style={{ flex: 1 }}
              />
              <select value={sessionFilter} onChange={(e) => setSessionFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="today">Today</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Subjects</label>
            <input
              type="text"
              placeholder="Search subjects..."
              value={subjectSearch}
              onChange={(e) => setSubjectSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="app-grid">
        <section className="section-card animate-fade" style={{ animationDelay: '0.1s' }}>
          <h2>📚 Study Sessions</h2>
          <SessionForm
            addSession={addSession}
            editSession={editSession}
            updateSession={updateSession}
            clearEdit={() => setEditSession(null)}
          />
          <SessionList
            sessions={filteredSessions}
            deleteSession={deleteSession}
            setEditSession={setEditSession}
            editSessionItem={editSession}
          />
        </section>

        <section className="section-card animate-fade" style={{ animationDelay: '0.2s' }}>
          <h2>🏷️ Subjects</h2>
          <SubjectForm
            addSubject={addSubject}
            editSubject={editSubjectItem}
            updateSubject={updateSubject}
            clearEdit={() => setEditSubjectItem(null)}
          />
          <SubjectList
            subjects={filteredSubjects}
            deleteSubject={deleteSubject}
            setEditSubject={editSubject}
            editSubjectItem={editSubjectItem}
          />
        </section>
      </div>
    </Layout>
  );
}

export default App;