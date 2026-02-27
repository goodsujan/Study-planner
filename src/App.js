import { useState } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';

function App() {
  const [subjects, setSubjects] = useState([]);

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

  return (
    <Layout>
      <Header />
      <SubjectForm onAddSubject={addSubject} />
      <SubjectList
        subjects={subjects}
        onDelete={deleteSubject}
      />
    </Layout>
  );
}

export default App;