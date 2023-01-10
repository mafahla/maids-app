module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuh002rrk0bnku27tig-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'maid_database'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'ZvAM4IbaqG6nqstlwk1bId9ZR9ZQHTcL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
