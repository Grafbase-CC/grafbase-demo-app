import React, { useState } from "react";
import styles from '/styles/Modal.module.css';
import featureStyles from '/styles/Features.module.css';
import utilStyles from '/styles/Utils.module.css';
import JSONPretty from 'react-json-pretty';

function Modal({query, variables = {}, buttonText, defaultExample}) {
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
    setState(sample_create_mutation);
    setOpen(true);
    setLoading(false);
  }

  if(open) {
    return(
      <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <div className={styles.modal_title}>Grafbase Mutation Example</div>
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
      onClick={!defaultExample ? handleClick : handleDefault}
      >
        {loading ? "Loading" : buttonText}
    </button>
  )
}

const sample_create_mutation = /* GraphQL */`
  mutation create {
      userCreate(
      input: {
          email: "email"
          name: "name"
          posts: {
          create: {
              slug: "slug"
              title: "title"
              content: "content"
          }
          }
      }
      ) {
      user {
          email
          name
          id
          updatedAt
          createdAt
      }
      }
  }
`;

const mutation_query =
      /* GraphQL */`
    mutation create(
        $email: Email!, 
        $name: String!, 
        $slug: String!, 
        $title: String!, 
        $content: String!
      ) {
      userCreate(
        input: {
          email: $email
          name: $name
          posts: {
            create: {
              slug: $slug
              title: $title
              content: $content
            }
          }
        }
      ) {
        user {
          email
          name
          id
          updatedAt
          createdAt
        }
      }
    }
`;

const Chance = require('chance');  
const chance = new Chance();
const email = chance.email();
const name = chance.name();
const slug = chance.word();
const title = chance.sentence({ words: chance.integer({ min: 1, max: 4}) });
const content = chance.paragraph({ sentences: chance.integer({ min: 1, max: 3}) });
const variables = {
  email: email,
  name: name,
  slug: slug,
  title: title,
  content: content
};

export default function SchemaMutationExample({defaultExample=true}) {  
  const buttonText = defaultExample ? "Show Sample Mutation" : "Create new User and Post"

  return (
    <Modal
        query={mutation_query}
        variables={variables}
        buttonText={buttonText}
        defaultExample={defaultExample}
    />
  );
};  