import Layout from "../../components/Layout"
import styles from "../../styles/Features.module.css"
import utilStyles from '../../styles/Utils.module.css'

export default function Schema(){
    return(
        <Layout home={false}>
            <div className={utilStyles.center}>
                <h1 className={styles.title}>Schema Queries</h1>
            </div>
        </Layout>
    )
}