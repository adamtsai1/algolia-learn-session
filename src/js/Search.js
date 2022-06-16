import React from 'react';
import { Hits, InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

export const algoliaClient = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_SEARCH_API_KEY);

const App = () => {
    return (
        <div>
            <InstantSearch indexName={`${process.env.ENVIRONMENT}_employees`} searchClient={algoliaClient}>
                <Hits />
            </InstantSearch>
        </div>
    );
};

export default App;
