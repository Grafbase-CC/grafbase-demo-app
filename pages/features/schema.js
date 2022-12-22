import Layout from "../../components/Layout"
import styles from "../../styles/Features.module.css"
import utilStyles from '../../styles/Utils.module.css'
import SchemaMutationExample from "../../components/SchemaMutationExample"

export default function Schema(){
    return(
        <Layout home={false}>
            <h1 className={styles.title}>Schema Queries & Mutations</h1>   
            <div className={utilStyles.description}>
                <p>
                    For this example we are using the Grafbase Blog template to demonstrate how to 
                    easily implementate mutations and queries with Grafbase GraphQL API.
                </p>
            </div>  
            <div className={utilStyles.center}>
                <div className={utilStyles.grid}>
                    <div className={utilStyles.card}>
                        <h2 className={styles.title}>Insert a blog post</h2>
                        <p>
                            To view an example of a mutation query written in GraphQL, click the button below.
                        </p>
                        <p>
                            With this mutation we create a user and a blog post for that user.
                        </p>  
                        <div id="modal-root">
                            <SchemaMutationExample defaultExample={false} />
                            <SchemaMutationExample />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}