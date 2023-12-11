export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type myData = {
  ticketID: number;
  priority: number | null;
  description: string;
  assigned: string;
  status: string;
  comments: string[];
  dateCreated: string;
  completeDate: string;
};

export type ww_user = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type ww_ticket = {
  id: number;
  ticketCreatedBy: number;
  priority: number;
  description: string;
  assigned: string;
  status: string;
  dateCreated: number;
  completeDate: number | null;
};

export type ww_task = {
  id: number;
  ticketID: number;
  taskCreatedBy: number;
  task: string;
  status: string;
  dateCreated: number;
  completeDate: number | null;
};

export type ww_comment = {
  id: number;
  commentCreatedBy: number;
  ticketID: number;
  taskID: number;
  comment: string;
  dateCreated: number;
};
