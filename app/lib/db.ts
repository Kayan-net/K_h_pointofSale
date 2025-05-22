// db.ts - Exports a dummy db object for demonstration. Replace with your actual db setup.
export const db = {
  insert: () => ({
    values: () => ({
      returning: () => [{ id: 1 }]
    })
  })
};

// If you use a real ORM (like Prisma, Drizzle, etc.), replace the above with your actual db instance.