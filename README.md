## Neighborhood Map Server
Uses `yelp-fusion` api to provide neighborhood-map yelp data.

### Required Setup:
* Obtain a yelp api key from: https://www.yelp.com/fusion
* create `apikeys.js` file in root of project repo `neighborhood-map-server/`
  * Add the following code:
  * ```const yelpAPIKey = <your-api-key>; module.exports = yelpAPIKey;```
* run `npm start` from root of directory
#### Endpoints:
`/search/:id`
* `:id` = yelp fusion id
* returns json yelp metadata

`/search/name/:terms`
* _experimental_
* pass in search terms to retrieve businesses in Gladstone, OR

_Visit `localhost:6001/`_ to get started!