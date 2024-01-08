import { sql } from "@vercel/postgres";
import { ww_user, ww_ticket, ww_task, ww_comment } from "../definitions";

export async function fetchUsers() {
  try {
    const data = await sql<ww_user>`SELECT * FROM ww_users`;
    const rows = data.rows
    return rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch users from ww_users.");
  }
}

export async function fetchTickets() {
  try {
    const data = await sql<ww_ticket>`SELECT * FROM ww_tickets`;
    const rows = data.rows
    return rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch tickets from ww_tickets.");
  }
}

export async function fetchTasks() {
  try {
    const data = await sql<ww_task>`SELECT * FROM ww_tasks`;
    const rows = data.rows
    return rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch tasks from ww_tasks.");
  }
}

export async function fetchComments() {
  try {
    const data = await sql<ww_comment>`SELECT * FROM ww_comments`;
    const rows = data.rows
    return rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch comments from ww_comments");
  }
}
