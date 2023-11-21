// Wikipedia.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wikipedia = ({ locationName }) => {
  const [wikiData, setWikiData] = useState(null);

  useEffect(() => {
    const fetchWikipediaData = async () => {
      try {
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${locationName}&exintro=true&origin=*`
        );

        // Extracting the first page ID from the response
        const pageId = Object.keys(response.data.query.pages)[0];

        // Checking if the page exists
        if (pageId !== '-1') {
          setWikiData(response.data.query.pages[pageId].extract);
        } else {
          setWikiData('No information available on Wikipedia.');
        }
      } catch (error) {
        console.error('Error fetching Wikipedia data:', error);
      }
    };

    fetchWikipediaData();
  }, [locationName]);

  return (
    <div className="mt-4">
      <h2>Wikipedia Information</h2>
      {wikiData ? (
        <div dangerouslySetInnerHTML={{ __html: wikiData }} />
      ) : (
        <p>Loading Wikipedia information...</p>
      )}
    </div>
  );
};

export default Wikipedia;
