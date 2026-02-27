export const getStoredSubjects = () => {
    const data = localStorage.getItem('subjects');
    return data ? JSON.parse(data) : [];
};

export const storeSubjects = (subjects) => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
};