//     function getData() {
//         /**
//          * Generates a random number and returns it as a string for OAuthentication
//          * @return {string}
//          */
//         function nonce_generate() {
//             return (Math.floor(Math.random() * 1e12).toString());
//         }

//         // var YELP_BASE_URL = 'https://api.yelp.com/';

//         var yelp_url = 'https://api.yelp.com/v2/search';

//         var parameters = {
//             oauth_consumer_key:  "yVy9s54D7PTzToicjSueFA",
//             oauth_token: "ZgNxvcW8R_ccZOetOQl-hXbe3yqSwvgu",
//             oauth_nonce: nonce_generate(),
//             oauth_timestamp: Math.floor(Date.now() / 1000),
//             oauth_signature_method: 'HMAC-SHA1',
//             oauth_version: '1.0',
//             limit: 1,
//             callback: 'cb',
//             term: 'Yoga Heights',
//             location: 'Washington, DC'
//         };

//         var encodedSignature = oauthSignature.generate('GET', yelp_url, parameters, "Z-qJKTqp-NRvzSGqnyaLgwyQY9s", "L61hpk9p-ec31fehJOwq58jDGzE");
//         parameters.oauth_signature = encodedSignature;

//         var settings = {
//             url: yelp_url,
//             data: parameters,
//             cache: true, // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
//             dataType: 'jsonp',
//             success: function(results) {
//                 // Do stuff with results
//                 console.log('success!');
//                 console.log(results);
//             },
//             error: function(e) {
//                 // Do stuff on fail
//                 console.log('error!');
//                 console.log(e);
//             }
//         };

//         // Send AJAX query via jQuery library.
//         $.ajax(settings);
//     }

// // getData();
//       // var auth = {
//       //   //
//       //   // Update with your auth tokens.
//       //   //
//       //   consumerKey : "yVy9s54D7PTzToicjSueFA",
//       //   consumerSecret : "Z-qJKTqp-NRvzSGqnyaLgwyQY9s",
//       //   accessToken : "ZgNxvcW8R_ccZOetOQl-hXbe3yqSwvgu",
//       //   // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
//       //   // You wouldn't actually want to expose your access token secret like this in a real application.
//       //   accessTokenSecret : "L61hpk9p-ec31fehJOwq58jDGzE",
//       //   serviceProvider : {
//       //     signatureMethod : "HMAC-SHA1"
//       //   }
//       // };

//       // var terms = 'food';
//       // var near = 'San+Francisco';

//       // var accessor = {
//       //   consumerSecret : auth.consumerSecret,
//       //   tokenSecret : auth.accessTokenSecret
//       // };

//       // parameters = [];
//       // parameters.push(['term', terms]);
//       // parameters.push(['location', near]);
//       // parameters.push(['callback', 'cb']);
//       // parameters.push(['oauth_consumer_key', auth.consumerKey]);
//       // parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
//       // parameters.push(['oauth_token', auth.accessToken]);
//       // parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

//       // var message = {
//       //   'action' : 'http://api.yelp.com/v2/search',
//       //   'method' : 'GET',
//       //   'parameters' : parameters
//       // };

//       // OAuth.setTimestampAndNonce(message);
//       // OAuth.SignatureMethod.sign(message, accessor);

//       // var parameterMap = OAuth.getParameterMap(message.parameters);
//       // parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
//       // console.log(parameterMap);

//       // $.ajax({
//       //   'url' : message.action,
//       //   'data' : parameterMap,
//       //   'cache' : true,
//       //   'dataType' : 'jsonp',
//       //   'jsonpCallback' : 'cb',
//       //   'success' : function(data, textStats, XMLHttpRequest) {
//       //     console.log(data);
//       //   }
//       // });
