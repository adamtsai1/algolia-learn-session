import React, { useState } from 'react';
import {
    Configure,
    Hits,
    InstantSearch,
    Pagination,
    RefinementList,
    SearchBox,
    SortBy,
    Stats,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import EmployeeCard from './EmployeeCard';
import SearchMetadata from './SearchMetadata';

export const algoliaClient = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_SEARCH_API_KEY);

const sortingOptions = [
    {
        value: `${process.env.ENVIRONMENT}_employees`,
        label: 'Best Match',
    },
    {
        value: `${process.env.ENVIRONMENT}_employees_sort_by_last_name_asc`,
        label: 'Last Name (A-Z)',
    },
    { value: `${process.env.ENVIRONMENT}_employees_sort_by_years_desc`, label: 'Years' },
];

const App = () => {
    const [sortBy, setSortBy] = useState(sortingOptions[0]);

    return (
        <div>
            <InstantSearch indexName={`${process.env.ENVIRONMENT}_employees`} searchClient={algoliaClient}>
                <Configure hitsPerPage={6} />

                <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(12, 1fr)' }}>
                    {/* Filters */}
                    <div style={{ gridColumn: '1 / 3' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <h4>Department</h4>
                            <RefinementList attribute="department" />
                        </div>

                        <div>
                            <h4>Job Title</h4>
                            <RefinementList attribute="jobTitle" />
                        </div>
                    </div>

                    <div style={{ gridColumn: '3 / 12' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <SearchBox />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <SortBy defaultRefinement={sortBy.value} items={sortingOptions} />
                        </div>

                        <Stats />
                        <SearchMetadata />
                        <Hits hitComponent={EmployeeCard} />
                        <Pagination />
                    </div>
                </div>
            </InstantSearch>
        </div>
    );
};

export default App;
