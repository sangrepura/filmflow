import { pgTable, text, real, uuid, timestamp, serial, primaryKey, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
});

export const watchlist = pgTable(
  'watchlist',
  {
    createdAt: timestamp('created_at').defaultNow(),
    name: text('name'),
    voteAverage: real('vote_average'),
    posterPath: text('poster_path'),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    mediaId: integer('media_id').notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.mediaId] }),
    };
  }
);