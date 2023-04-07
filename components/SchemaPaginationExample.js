import React, { useState } from "react";
import styles from '/styles/Modal.module.css';
import featureStyles from '/styles/Features.module.css';
import utilStyles from '/styles/Utils.module.css';
import JSONPretty from 'react-json-pretty';

function Modal({query, variables, buttonText, defaultExample}) {
  const [state, setState] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleClick(){  
    fetch('/api/grafbase', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    })
    .then(res => res.json())
    .then(data => setState(data))
    .then(() => setOpen(true))
    .then(() => setLoading(false))
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  function handleCursor({cursor}) {
    console.log("handling cursor");
    const vars = {
      after: {cursor},
      first: 5
    }

    fetch('/api/grafbase', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: nextPageQuery,
        variables: vars
      })
    })
    .then(res => res.json())
    .then(data => setState(data))
    .then(() => setOpen(true))
    .then(() => setLoading(false))
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  function handleDefault() {
    setState(samplePostsQuery);
    setOpen(true);
    setLoading(false);
  }

  if(open) {
    return(
      <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <div className={styles.modal_title}>Grafbase Query Example</div>
              <div className={styles.modal_close}>
                <button className={styles.close} onClick={() => setOpen(false)}>&times;</button>
              </div>
            </div>
            <div className={styles.modal_body}>
              <div className={!defaultExample ? styles.cursor : styles.hidden}>
                <input id="cursor" type="text" placeholder="Enter the cursor to paginate after" />
                <button onClick={handleCursor(document.getElementById('cursor').innerText)}>Next Page</button>
              </div>
              <div className={featureStyles.code_snippet}>
                <JSONPretty
                  id="json-pretty"
                  data={state}
                ></JSONPretty>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
    <button 
      className={utilStyles.submit} 
      onClick={!defaultExample ? handleClick : handleDefault}
      >
        {loading ? "Loading" : buttonText}
    </button>
  )
}

const samplePostsQuery = /* GraphQL */`
  query pagination {
    postCollection(first: 5) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          id
          updatedAt
          createdAt
          slug
          title
          content
        }
        cursor
      }
    }
  }
`;

const postsQuery = /* GraphQL */`
  query pagination ($first: Int!) {
    postCollection(first: $first) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          id
          updatedAt
          createdAt
          slug
          title
          content
        }
        cursor
      }
    }
  }
`;

const nextPageQuery = /* GraphQL */`
  query pagination ($after: String!, $first: Int!) {
    postCollection(after: $after, first: $first) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          id
          updatedAt
          createdAt
          slug
          title
          content
        }
        cursor
      }
    }
  }
`;

export default function SchemaPaginationExample({defaultExample=true}) {  
  const buttonText = defaultExample ? "Show Sample Query" : "Query all blog posts";

  return (
    <Modal
        query={postsQuery}
        variables={{first: 5}}
        buttonText={buttonText}
        defaultExample={defaultExample}
    />
  );
};  