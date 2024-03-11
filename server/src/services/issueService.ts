// src/issueService.ts
import fs from "fs";
import path from "path";
import { Issue } from "../types/issue.type";

const dataFilePath = path.join(__dirname, "../database/issues.json"); // Adjust path if needed

// Load issues from the file
function loadIssues(): Issue[] {
  try {
    const dataBuffer = fs.readFileSync(dataFilePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.error("Error loading issues:", error);
    return []; // Return empty if issues can't be loaded
  }
}

// Save issues to the file
function saveIssues(issues: Issue[]) {
  const dataJSON = JSON.stringify(issues);
  fs.writeFileSync(dataFilePath, dataJSON);
}

// Read Issue
export function getIssueById(id: number): Issue | undefined {
  const loadedIssues = loadIssues();
  return loadedIssues.find((issue) => issue.id === id);
}

// Update Issue
export function updateIssue(updatedIssue: Issue): Issue | undefined {
  let loadedIssues = loadIssues();
  const index = loadedIssues.findIndex((issue) => issue.id === updatedIssue.id);

  if (index !== -1) {
    loadedIssues[index] = updatedIssue;
    saveIssues(loadedIssues);
    return updatedIssue;
  } else {
    return undefined;
  }
}

// Delete Issue
export function deleteIssue(id: number): boolean {
  let loadedIssues = loadIssues();
  const index = loadedIssues.findIndex((issue) => issue.id === id);

  if (index !== -1) {
    loadedIssues.splice(index, 1);
    saveIssues(loadedIssues);
    return true;
  } else {
    return false;
  }
}
