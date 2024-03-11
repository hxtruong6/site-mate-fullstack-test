import React, { useState } from "react";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";
import { Issue } from "./utilities/types";
import "./App.css";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [toggleRender, setToggleRender] = useState<boolean>(false);
  const [currentIssue, setCurrentIssue] = useState<Issue | undefined>(
    undefined
  );
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const setCurrentIssue_ = (issue: Issue | undefined) => {
    setCurrentIssue(issue);
    toggleForm();
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
        setCurrentIssue={setCurrentIssue_}
      />
    </div>
  );
};

export default App;
