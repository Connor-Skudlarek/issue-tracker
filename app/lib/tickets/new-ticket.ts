import { sql } from "@vercel/postgres";
import { z } from "zod";

const TicketSchema = z.object({
  id: z.string(),
  ticketID: z.string({
    invalid_type_error: "Please select a ticket.",
  }),
  priority: z.coerce
    .number()
    .gt(0, { message: "Priority should be 1, 2, 3...n" }),
  description: z.string(),
  assigned: z.string(),
  status: z.enum([
    "Pending",
    "In Work",
    "Paused",
    "Under Review",
    "Complete",
    "Rejected",
  ]),
  comments: z.string(), // This may need to be looked at
  dateCreated: z.string(), // This might be default created by Postgres
  completeDate: z.string(), // Same for this
});

export async function createNewTicket(ticketDetails: {}) {
  // need to add create ticket logic
}

export async function createNewComment(commentDetails: {}) {
  // need to add create comment logic
}

export async function createNewTask(taskDetails: {}) {
  // need to add create new task logic
}

// Some more things I should include
// CREATE INDEX idx_comments_ticketID ON Comments (ticketID);
// CREATE INDEX idx_tasks_ticketID ON Tasks (ticketID);

export async function createTicketTable(ticketDetails: {}) {
  // CREATE TABLE Tickets (
  //     id SERIAL PRIMARY KEY,
  //     priority INT,
  //     description TEXT,
  //     assigned VARCHAR(255),
  //     status VARCHAR(255) DEFAULT 'Pending',
  //     dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //     completeDate TIMESTAMP
  // );
}

export async function createCommentTable(commentDetails: {}) {
  // CREATE TABLE Comments (
  //     id SERIAL PRIMARY KEY,
  //     ticketID INT,
  //     taskID INT,
  //     comment TEXT,
  //     dateCreated DATE,
  //     FOREIGN KEY (ticketID) REFERENCES Tickets(id),
  //     FOREIGN KEY (taskID) REFERENCES Tasks(id)
  // );
}

export async function createTaskTable(taskDetails: {}) {
  // CREATE TABLE Tasks (
  //     id INT PRIMARY KEY,
  //     ticketID INT,
  //     task TEXT,
  //     status VARCHAR(255),
  //     dateCreated DATE,
  //     completeDate DATE,
  //     FOREIGN KEY (ticketID) REFERENCES Tickets(id)
  // );
}