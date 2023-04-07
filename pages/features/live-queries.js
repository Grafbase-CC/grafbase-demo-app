import Layout from "../../components/Layout"
import styles from "../../styles/Features.module.css"
import utilStyles from '../../styles/Utils.module.css'
import SchemaLiveQueryExample from "../../components/SchemaLiveQueryExample"

export default function LiveQueries(){
    return(
        <Layout home={false}>
            <h1 className={styles.title}>Live Queries</h1>   
            <div className={utilStyles.description}>
                <p>
                    For this example we are using the Grafbase Blog template to demonstrate how to 
                    easily implementate live queries with the Grafbase GraphQL API.
                </p>
            </div>  
            <div className={utilStyles.center}>
                <div className={utilStyles.card}>
                    <h2 className={styles.title}>Query all posts</h2>
                    <p>
                        To view an example of a query written in GraphQL, click the button below.
                    </p>
                    <SchemaLiveQueryExample />
                    <br />
                    <br />
                    <p>
                        With this query we open a live query connection and listen for changes to the blog posts.
                    </p>  
                    <SchemaLiveQueryExample defaultExample={false} />
                </div>
            </div>
        </Layout>
    )
}