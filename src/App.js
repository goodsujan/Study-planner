import { useState } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import SubjectForm from './components/SubjectForm';
import SubjectList from './components/SubjectList';

function App() {
  const [subjects, setSubjects] = useState([]);

  return (
    <Layout>
      <Header />
      <SubjectForm />
      <SubjectList subjects={subjects} />
    </Layout>
  );
}

export default App;