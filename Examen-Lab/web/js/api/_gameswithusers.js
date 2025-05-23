/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const gameswithusersAPI_auto = {

    /** Gets all entries from 'gameswithusers' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/gameswithusers`, requestOptions);
        return response.data;
    },
};

export { gameswithusersAPI_auto };