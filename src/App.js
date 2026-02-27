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

  return (
    <Layout>
      <Header />
      <SubjectForm onAddSubject={addSubject} />
      <SubjectList subjects={subjects} />
    </Layout>
  );
}

export default App;