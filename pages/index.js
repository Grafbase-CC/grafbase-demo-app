import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Inter } from '@next/font/google'
import styles from '../styles/Utils.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>      
        <div className={styles.description}>
          <p>
            Get started by selecting an item below
          </p>          
        </div>

        <div className={styles.center}>
          <div className={styles.grid}>
            <Link
              href="features/schema"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Schema Queries <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find out how easy it is to query your schema with Grafbase.
              </p>
            </Link>

            <Link
              href="features/pagination"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Pagination <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn how to use pagination with the Grafbase query language
              </p>
            </Link>

            <Link
              href="features/increment"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Increment Numeric Fields <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Discover how to increment and decrement numeric fields with the Grafbase query language
              </p>
            </Link>

            <Link
              href="features/clerk"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Clerk Authentication <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Authenticate your users with Clerk.dev
              </p>
            </Link>
          </div>
        </div>
    </Layout>
  )
}
