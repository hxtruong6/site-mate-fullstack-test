import React, { useState, useEffect } from "react";
import axios from "axios";

interface Issue {
  id: number;
  title: string;
  description: string;
}

interface IssueListProps {
  // issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const result = await axios.get("http://localhost:3001/issues"); // Replace with your server URL
      setIssues(result.data);
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Issue List</h2>
      <ul>
        {issues.map((issue: any) => (
          <li key={issue.id}>
            {issue.title} - {issue.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
