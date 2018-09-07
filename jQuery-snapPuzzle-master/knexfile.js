module.exports = {
  development : {
    client : 'postgresql',
    connection: 'postgress://postgres:admin@localhost:5432/dbPuzzle'
  },
  
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};