import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IssueForm.css";
import { Issue } from "../utilities/types";

interface IssueFormProps {
  toggleRender: boolean;
  setToggleRender: (value: boolean) => void;
  currentIssue: Issue | undefined;
  toggleForm: () => void;
}

const IssueForm: React.FC<IssueFormProps> = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issueId, setIssueId] = useState<number | undefined>(undefined); // Or some appropriate type for your ID

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      if (issueId) {
        await axios.put(`http://localhost:3001/issues/${issueId}`, {
          id: issueId,
          title,
          description,
        });
      } else {
        const response = await axios.post("http://localhost:3001/issues", {
          title,
          description,
        });

        console.log("Issue created:", response.data);
        // Reset form fields
        setTitle("");
        setDescription("");
      }

      props.setToggleRender(!props.toggleRender);
      props.toggleForm();
    } catch (error) {
      console.error("Error creating issue:", error);
      // Handle the error appropriately (e.g., display an error message)
    }
  };

  useEffect(() => {
    // If there's a current issue, populate the form fields
    if (props.currentIssue) {
      setTitle(props.currentIssue.title);
      setDescription(props.currentIssue.description);
      setIssueId(props.currentIssue.id);
    }
  }, [props.currentIssue]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>{issueId ? "Edit Issue" : "Add New Issue"}</h2>
        {/* Or "Edit Issue" if you add update functionality */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IssueForm;
