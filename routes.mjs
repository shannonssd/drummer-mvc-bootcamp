import db from './models/index.mjs';

import initShowController from './controllers/show.mjs';
import initCreateController from './controllers/create.mjs';
import initReservListController from './controllers/index-reservation-list.mjs';
import initDrummerListController from './controllers/index-drummer-list.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const showDrummerController = initShowController(db);
  const createReservController = initCreateController(db);
  const showReservListController = initReservListController(db);
  const showDrummerListController = initDrummerListController(db);

  // define your route matchers here using app
  app.get('/', showDrummerListController.index);
  app.get('/drummer/:id', showDrummerController.index);
  app.get('/reservations/:drummer_id', showReservListController.index);
  app.post('/reservation/:drummer_id', createReservController.index);
}
