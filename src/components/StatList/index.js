import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { load } from '../../helpers/spreadsheet';
import config from '../../config';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 200px;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  width: 45%;
  height: 200px;
  border: solid 4px black;
  box-sizing: border-box;
  box-shadow: 5px 10px #888888;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Card = props => {
  return (
    <CardContainer>
      {props.data}
    </CardContainer>
  )
}

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
    <Container>
        {state.stats && state.stats.map((statRow, i) => (
          <Row>
            <Card data={statRow.category} />
            <Card data={statRow.monthly} />
          </Row>
        ))}
    </Container>
  )
}
