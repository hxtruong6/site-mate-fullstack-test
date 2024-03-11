import React, { useState } from "react";
import IssueList from "./IssueList";
import IssueForm from "./IssueForm";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h1>Issue Tracker</h1>

      <button onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add New Issue"}
      </button>

      {showForm && <IssueForm />}

      <IssueList issues={[]} />
    </div>
  );
};

export default App;
