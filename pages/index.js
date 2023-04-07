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

        <div className={styles.grid}>
          <Link
            href="features/schema"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Schema Queries & Mutations<span>-&gt;</span>
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
            href="features/live-queries"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Live Queries <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Create realtime applications with Live Queries
            </p>
          </Link>
        </div>

        <div className={styles.center}>
        </div>
    </Layout>
  )
}
