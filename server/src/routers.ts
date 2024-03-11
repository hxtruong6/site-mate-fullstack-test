// src/routes.ts
import express, { Request, Response } from "express";
import { Issue } from "./types/issue.type";
import {
  createIssue,
  deleteIssue,
  getAllIssues,
  getIssueById,
  updateIssue,
} from "./services/issueService";

const router = express.Router();

// GET /issues
router.get("/issues", (req: Request, res: Response) => {
  res.json({
    data: getAllIssues(),
  });
});

// GET /issues/:id
router.get("/issues/:id", (req: Request, res: Response) => {
  const issueId = parseInt(req.params.id);
  const issue = getIssueById(issueId);

  if (issue) {
    res.json({
      data: issue,
    });
  } else {
    res.status(404).json({
      message: "Issue not found",
    });
  }
});

// POST /issues
router.post("/issues", (req: Request, res: Response) => {
  const newIssue = req.body as Issue;
  console.log("New issue created:", newIssue);
  createIssue(newIssue);
  res.json({
    data: newIssue,
    message: "Issue created",
  });
});

// PUT /issues/:id
router.put("/issues/:id", (req: Request, res: Response) => {
  const issueId = parseInt(req.params.id);
  const updatedIssue = req.body as Issue;

  if (issueId !== updatedIssue.id) {
    res.status(400).json({
      message: "ID in the request body does not match the ID in the URL",
    });
    return;
  }

  const issue = updateIssue(updatedIssue);
  if (issue) {
    res.json({
      data: issue,
      message: "Issue updated",
    });
  } else {
    res.status(404).json({
      message: "Issue not found",
    });
  }
});

// DELETE /issues/:id
router.delete("/issues/:id", (req: Request, res: Response) => {
  const issueId = parseInt(req.params.id);
  if (deleteIssue(issueId)) {
    res.status(204).send();
  } else {
    res.status(404).json({
      message: "Issue not found",
    });
  }
});

export default router;
