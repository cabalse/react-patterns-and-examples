export type User = {
  id: string;
  name?: string;
  email?: string;
  roles?: string[];
  // add only what most components truly need
};
