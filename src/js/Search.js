import React from 'react';
import { Hits, InstantSearch, Pagination, Stats } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import EmployeeCard from './EmployeeCard';

export const algoliaClient = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_SEARCH_API_KEY);

const App = () => {
    return (
        <div>
            <InstantSearch indexName={`${process.env.ENVIRONMENT}_employees`} searchClient={algoliaClient}>
                <Stats />
                <Hits hitComponent={EmployeeCard} />
                <Pagination />
            </InstantSearch>
        </div>
    );
};

export default App;
