import React, { useState, useEffect } from 'react';
import { load } from '../../helpers/spreadsheet';
import config from '../../config';

export default() => {
  const [state, setState] = useState({
    stats: [],
    error: null,
  })

  const onLoad = (data, error) => {
    if (data) {
      const stats = data.stats;
      setState({ stats });
    } else {
      setState({ error });
    }
  };

  const initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(onLoad);
    });
  };

  useEffect(() => {
    let statGet = window.gapi.load("client", initClient);

    return () => {
      statGet();
    }
  }, [])

  return (
    <div>
    {console.log(state)}
        <ul>
        {state.stats && state.stats.map((statRow, i) => (
          <li key={i}>
            {statRow.category} {statRow.daily} {statRow.monthly}
          </li>
        ))}
      </ul>
    </div>
  )
}
