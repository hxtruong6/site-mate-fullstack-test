import React, { useState } from "react";
import axios from "axios";

interface IssueFormProps {
  // Add props for editing if needed (e.g., onUpdate: (issue: Issue) => void)
}

const IssueForm: React.FC<IssueFormProps> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/issues", {
        title,
        description,
      });

      console.log("Issue created:", response.data);
      // Ideally, reset form fields and refresh the IssueList here
    } catch (error) {
      console.error("Error creating issue:", error);
      // Handle the error appropriately (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Issue</h2>{" "}
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
  );
};

export default IssueForm;
