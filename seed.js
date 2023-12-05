const { db } = require("@vercel/postgres");
const {
  tickets,
  comments,
  tasks,
  ww_users,
} = require("../app/lib/placeholder-data.js");
const bcryptjs = require("bcryptjs");

async function seedww_users(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "tickets" table if it doesn't exist
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

async function seedtickets(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "tickets" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS Tickets (
      id SERIAL PRIMARY KEY,
      priority INT,
      description TEXT,
      assigned VARCHAR(255),
      status VARCHAR(255) DEFAULT 'Pending',
      dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      completeDate TIMESTAMP
  );
`;

    console.log(`Created "tickets" table`);

    // Insert data into the "tickets" table
    const insertedtickets = await Promise.all(
      tickets.map(
        (ticket) => client.sql`
        INSERT INTO tickets (priority, description, assigned, status, dateCreated, completeDate)
        VALUES (${ticket.priority}, ${ticket.description}, ${ticket.assigned}, ${ticket.status}, ${ticket.dateCreated}, ${ticket.completeDate})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedtickets.length} tickets`);

    return {
      createTable,
      tickets: insertedtickets,
    };
  } catch (error) {
    console.error("Error seeding tickets:", error);
    throw error;
  }
}

async function seedcomments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "comments" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS Comments (
            id SERIAL PRIMARY KEY,
            ticketID INT,
            taskID INT,
            ww_userID INT,
            comment TEXT,
            dateCreated DATE,
            FOREIGN KEY (ticketID) REFERENCES Tickets(id),
            FOREIGN KEY (taskID) REFERENCES Tasks(id)
        );
    `;

    console.log(`Created "comments" table`);

    // Insert data into the "comments" table
    const insertedcomments = await Promise.all(
      comments.map(
        (comment) => client.sql`
        INSERT INTO comments (ticketID, taskID, comment, dateCreated)
        VALUES (${comment.ticketID}, ${comment.taskID}, ${comment.ww_userID}, ${comment.comment}, ${comment.dateCreated})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedcomments.length} comments`);

    return {
      createTable,
      comments: insertedcomments,
    };
  } catch (error) {
    console.error("Error seeding comments:", error);
    throw error;
  }
}

async function seedtasks(client) {
  try {
    // Create the "tasks" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS Tasks (
      id INT PRIMARY KEY,
      ticketID INT,
      task TEXT,
      status VARCHAR(255),
      dateCreated DATE,
      completeDate DATE,
      FOREIGN KEY (ticketID) REFERENCES Tickets(id)
  );  
    
    `;

    console.log(`Created "tasks" table`);

    // Insert data into the "tasks" table
    const insertedtasks = await Promise.all(
      tasks.map(
        (rev) => client.sql`
        INSERT INTO tasks (month, tasks)
        VALUES (${rev.month}, ${rev.tasks})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedtasks.length} tasks`);

    return {
      createTable,
      tasks: insertedtasks,
    };
  } catch (error) {
    console.error("Error seeding tasks:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedww_users(client);
  await seedcomments(client);
  await seedtickets(client);
  await seedtasks(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
