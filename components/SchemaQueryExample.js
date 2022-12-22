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

  function handleDefault() {
    setState(sampleUsersQuery);
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
      onClick={defaultExample ? handleClick : handleDefault}
      >
        {loading ? "Loading" : buttonText}
    </button>
  )
}

const sampleUsersQuery = /* GraphQL */`
  query {
    userCollection(first: 10) {
      edges {
        node {
          email
          name
          id
          updatedAt
          createdAt
        }
        cursor
      }
    }
  }
`;

const usersQuery = /* GraphQL */`
  query ($first: Int!) {
    userCollection(first: $first) {
      edges {
        node {
          email
          name
          id
          updatedAt
          createdAt
        }
        cursor
      }
    }
  }
`;

export default function SchemaQueryExample({defaultExample=true}) {  
  const buttonText = !defaultExample ? "Show Sample Query" : "Query all users"

  return (
    <Modal
        query={usersQuery}
        variables={{first: 10}}
        buttonText={buttonText}
        defaultExample={defaultExample}
    />
  );
};  