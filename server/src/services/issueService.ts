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

// Read all issues
export function getAllIssues(): Issue[] {
  return loadIssues();
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

// Create Issue
export function createIssue(newIssue: Issue): Issue {
  let loadedIssues = loadIssues();
  //   console.log("Loaded issues:", loadedIssues);
  const maxId = loadedIssues.reduce(
    (max, issue) => (issue.id > max ? issue.id : max),
    0
  );
  newIssue.id = maxId + 1;
  loadedIssues.push(newIssue);
  saveIssues(loadedIssues);
  return newIssue;
}

// Update Issue
export function updateIssue(updatedIssue: Issue): Issue | undefined {
  let loadedIssues = loadIssues();
  //   console.log("Loaded issues:", loadedIssues);
  //   console.log("Updated issue:", updatedIssue);
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
