const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const apiKey = require('../apikeys');
const debug = require('debug');

const client = yelp.client(apiKey, {
    socketTimeout: 5000
});

/**
 * retrieves yelp metadata from yelp-fusion
 *
 * @param id {String} - yelp id to retrieve
 * @res {JSON}        - yelp metadata || error
 */
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await client.business(id);

        res.json(response.jsonBody);
    } catch (e) {
        debug(e.message);
        res.json({error: 'there was an error in the search router', message: e.message});
    }
});

/**
 * UNTESTED
 * gets businesses which match search terms
 * @param terms {String} - url decoded search terms
 * @rers {JSON}          - yelp metadata || error
 */
router.get('/name/:terms', async (req, res) => {
    const { terms } = req.params;

    try {
        const response = await client.search({
            term: terms,
            location: 'gladstone, or'
        });

        res.json(response.jsonBody.businesses[0]);

    } catch (e) {
        debug(e.message);
        res.json({error: 'there was an error in the search router', message: e.message});
    }
});

module.exports = router;