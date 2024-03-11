// src/routes.ts
import express, { Request, Response } from "express";
import { Issue } from "./types/issue.type";

const router = express.Router();

// GET /issues
router.get("/issues", (req: Request, res: Response) => {
  res.json(issues);
});

// POST /issues
router.post("/issues", (req: Request, res: Response) => {
  const newIssue = req.body as Issue;
  newIssue.id = issues.length + 1; // Simple ID generation

  issues.push(newIssue);
  console.log("Issue created:", newIssue);
  // TODO: Update issue in the database or json file

  res.status(201).json(newIssue);
});

// PUT /issues/:id
router.put("/issues/:id", (req: Request, res: Response) => {
  const issueId = parseInt(req.params.id);
  const updatedIssue = req.body as Issue;

  const index = issues.findIndex((issue) => issue.id === issueId);
  if (index !== -1) {
    issues[index] = updatedIssue;
    console.log("Issue updated:", updatedIssue);
    res.json(updatedIssue);
  } else {
    res.status(404).send("Issue not found");
  }
});

// DELETE /issues/:id
router.delete("/issues/:id", (req: Request, res: Response) => {
  const issueId = parseInt(req.params.id);
  const index = issues.findIndex((issue) => issue.id === issueId);

  if (index !== -1) {
    issues.splice(index, 1);
    console.log("Issue deleted with ID:", issueId);
    res.sendStatus(204);
  } else {
    res.status(404).send("Issue not found");
  }
});

export default router;
