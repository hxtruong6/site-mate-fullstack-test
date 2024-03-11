import React, { useState } from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";
import { Issue } from "./utilities/types";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [toggleRender, setToggleRender] = useState<boolean>(false);
  const [currentIssue, setCurrentIssue] = useState<Issue | undefined>(
    undefined
  );
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h1>Issue Tracker</h1>

      <button onClick={toggleForm}>
        {showForm ? "Hide Form" : "Add New Issue"}
      </button>

      {showForm && (
        <IssueForm
          setToggleRender={setToggleRender}
          toggleRender={toggleRender}
          currentIssue={currentIssue}
          toggleForm={toggleForm}
        />
      )}

      <IssueList
        toggleRender={toggleRender}
        currentIssue={currentIssue}
        setCurrentIssue={setCurrentIssue}
      />
    </div>
  );
};

export default App;
