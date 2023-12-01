export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type myData = {
  ticketID: number;
  priority: number;
  description: string;
  assigned: string;
  status: string;
  comments: string[];
  dateCreated: string;
  completeDate: string;
};
