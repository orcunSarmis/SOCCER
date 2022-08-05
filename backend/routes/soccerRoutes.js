import { addNewPlayer, getPlayers } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')

    // get endpoint
    .get(getPlayers)

    // post endpoint
        .post(addNewPlayer);
}

export default routes;