// Import dependency modules
import app from '../app.js';
// import {sequelize} from './dbconn.js';

// Declaring and initialising the server port
const port = process.env.SERVER_PORT || 8000;

// Testing whether a connection to the database has been established
// try {
//   await sequelize.authenticate();
//   console.log('Connection to database successful.');
// } catch (error) {
//   console.log('Connection to database failed!');
// }

// Syncing all models with the database
// sequelize.sync()
//   .then(() => {
//     console.log(`All models have been successfully synced`)
//   })
//   .catch(error => {
//     console.error(error);
//   })

// Setting up the server to listen to the initialised port
const listener = app.listen(port, function () {
  console.log("Listening on port " + listener.address().port);
});

const closeServer = () => {
  listener.close((err) => {
    if (err) {
      console.error('Error closing server:', err);
    } else {
      console.log('Server closed successfully');
    }
  });
}

process.on('SIGTERM', closeServer);
process.on('SIGINT', closeServer);