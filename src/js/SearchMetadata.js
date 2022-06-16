import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

const SearchMetadata = ({ searchResults }) => {
    if (!searchResults) {
        return null;
    }

    const { hitsPerPage, nbHits, page } = searchResults;
    const rangeStart = page * hitsPerPage + 1;
    const rangeEnd = Math.min(rangeStart + hitsPerPage - 1, nbHits);

    if (nbHits === 0) {
        return <p>No results found.</p>;
    }

    return (
        <p>
            {rangeStart}-{rangeEnd} of {nbHits} results
        </p>
    );
};

export default connectStateResults(SearchMetadata);
