import React, { useState, useEffect } from "react";
import axios from "axios";

interface Issue {
  id: number;
  title: string;
  description: string;
}

interface IssueListProps {
  // issues: Issue[];
  toggleRender: boolean;
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
      }
    };

    fetchIssues();
  }, [props.toggleRender]);

  return (
    <div>
      <h2>Issue List</h2>
      {issues?.length > 0 && (
        <ul>
          {issues.map((issue: any) => (
            <li key={issue.id}>
              {issue.title} - {issue.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssueList;
