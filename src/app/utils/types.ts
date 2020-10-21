export type ViewMode = "RENDER" | "EDIT";

export interface User {
  username: string;
  timestamp: Date;
}

export interface CmsData {
  type: "image" | "text" | "hello";
  value?: any;
}
