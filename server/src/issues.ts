interface Issue {
  id: number;
  title: string;
  description: string;
}

let issues: Issue[] = [
  {
    id: 1,
    title: "Login Failure",
    description: "Can not login to the system.",
  },
  {
    id: 2,
    title: "Forgot password failure",
    description: "Can not click on forgot passsword",
  },
];

export default issues;
export { Issue };
