import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./IssueList.css";

interface Issue {
  id: number;
  title: string;
  description: string;
}

interface IssueListProps {
  // issues: Issue[];
  toggleRender: boolean;
  currentIssue: Issue | undefined;
  setCurrentIssue: (issue: Issue | undefined) => void;
}

const IssueList: React.FC<IssueListProps> = (props) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const result = await axios.get("http://localhost:3001/issues"); // Replace with your server URL
        setIssues(result.data.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
        toast.error("Error fetching issues");
      }
    };

    fetchIssues();
  }, [props.toggleRender]);

  const handleDelete = async (issueId: number) => {
    try {
      await axios.delete(`http://localhost:3001/issues/${issueId}`);
      // Update issues state to remove the deleted issue
      setIssues(issues.filter((issue: Issue) => issue.id !== issueId));
      toast.success("Issue deleted successfully");
    } catch (error) {
      console.error("Error deleting issue:", error);
      toast.error("Error deleting issue");
    }
  };

  const handleEdit = (issue: Issue) => {
    props.setCurrentIssue(issue); // Set the current issue to trigger edit mode
  };

  return (
    <div>
      <h2>Issue List</h2>
      {issues?.length > 0 && (
        <ul className="issue-list">
          {issues.map((issue: Issue) => (
            <li key={issue.id} className="issue-item">
              <div className="issue-title">{issue.title}</div>
              <div>{issue.description}</div>
              <div className="issue-buttons">
                <button className="edit" onClick={() => handleEdit(issue)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(issue.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssueList;
