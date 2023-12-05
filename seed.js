const { db } = require("@vercel/postgres");
const {
  ww_tickets,
  ww_comments,
  ww_tasks,
  ww_users,
} = require("../app/lib/placeholder-data.js");
const bcryptjs = require("bcryptjs");

async function seedww_users(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "ww_users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ww_users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL
      );
    `;

    console.log(`Created "ww_users" table`);

    // Insert data into the "ww_users" table
    const insertedww_users = await Promise.all(
      ww_users.map(async (user) => {
        const hashedPassword = await bcryptjs.hash(user.password, 10);
        return client.sql`
        INSERT INTO ww_users (id, name, email, password, role)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${role})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedww_users.length} ww_users`);

    return {
      createTable,
      ww_users: insertedww_users,
    };
  } catch (error) {
    console.error("Error seeding ww_users:", error);
    throw error;
  }
}

async function seedww_tickets(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "ww_tickets" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS ww_tickets (
      id SERIAL PRIMARY KEY,
      priority INT,
      description TEXT,
      assigned VARCHAR(255),
      status VARCHAR(255) DEFAULT 'Pending',
      dateCreated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      completeDate TIMESTAMPTZ
  );
`;

    console.log(`Created "ww_tickets" table`);

    // Insert data into the "ww_tickets" table
    const insertedww_tickets = await Promise.all(
      ww_tickets.map(
        (ticket) => client.sql`
        INSERT INTO ww_tickets (priority, description, assigned, status, dateCreated, completeDate)
        VALUES (${ticket.priority}, ${ticket.description}, ${ticket.assigned}, ${ticket.status}, ${ticket.dateCreated}, ${ticket.completeDate})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedww_tickets.length} ww_tickets`);

    return {
      createTable,
      ww_tickets: insertedww_tickets,
    };
  } catch (error) {
    console.error("Error seeding ww_tickets:", error);
    throw error;
  }
}

async function seedww_comments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "ww_comments" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS ww_comments (
            id SERIAL PRIMARY KEY,
            ticketID INT,
            taskID INT,
            ww_userID INT,
            comment TEXT,
            dateCreated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (ticketID) REFERENCES ww_tickets(id),
            FOREIGN KEY (taskID) REFERENCES ww_tasks(id)
        );
    `;

    console.log(`Created "ww_comments" table`);

    // Insert data into the "ww_comments" table
    const insertedww_comments = await Promise.all(
      ww_comments.map(
        (comment) => client.sql`
        INSERT INTO ww_comments (ticketID, taskID, comment, dateCreated)
        VALUES (${comment.ticketID}, ${comment.taskID}, ${comment.ww_userID}, ${comment.comment}, ${comment.dateCreated})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedww_comments.length} ww_comments`);

    return {
      createTable,
      ww_comments: insertedww_comments,
    };
  } catch (error) {
    console.error("Error seeding ww_comments:", error);
    throw error;
  }
}

async function seedww_tasks(client) {
  try {
    // Create the "ww_tasks" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS ww_tasks (
      id INT PRIMARY KEY,
      ticketID INT,
      task TEXT,
      status VARCHAR(255),
      dateCreated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      completeDate TIMESTAMPTZ,
      FOREIGN KEY (ticketID) REFERENCES ww_tickets(id)
  );  
    
    `;

    console.log(`Created "ww_tasks" table`);

    // Insert data into the "ww_tasks" table
    const insertedww_tasks = await Promise.all(
      ww_tasks.map(
        (task) => client.sql`
        INSERT INTO ww_tasks (ticketID, task, status, dateCreated, completeDate)
        VALUES (${task.ticketID}, ${task.task}, ${task.status}, ${task.dateCreated}, ${task.completeDate})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedww_tasks.length} ww_tasks`);

    return {
      createTable,
      ww_tasks: insertedww_tasks,
    };
  } catch (error) {
    console.error("Error seeding ww_tasks:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedww_users(client);
  await seedww_comments(client);
  await seedww_tickets(client);
  await seedww_tasks(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
