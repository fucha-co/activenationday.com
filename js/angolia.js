

// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// import algoliasearch from 'algoliasearch';
//
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("G9HWOSPASU", "a40176975e801b17564a12e02c163e42");
var index = client.initIndex('sample');



index.setSettings({
  searchableAttributes: [
    'brand',
    'name',
    'categories',
    'unordered(description)',
  ],
  customRanking: ['desc(popularity)'],
});




var search = instantsearch({
  // Replace with your own values
  appId: 'G9HWOSPASU',
  apiKey: 'a40176975e801b17564a12e02c163e42', // search only API key, no ADMIN key
  indexName: 'sample',
  urlSync: true
});



search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);



search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);



search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);


search.start();

