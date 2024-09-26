import { RscForm } from '@tobbe.dev/rsc-test'

import { Metadata } from '@redwoodjs/web'

import { Counter } from '../../components/Counter/Counter'

import { onSend } from './actions'
import styles from './HomePage.module.css'
import './HomePage.css'

const HomePage = ({ name = 'Anonymous' }) => {
  const catCodes = [
    '100',
    '101',
    '102',
    '103',
    '200',
    '201',
    '202',
    '203',
    '204',
    '205',
    '206',
    '207',
    '208',
    '226',
    '300',
    '301',
    '302',
    '303',
    '304',
    '305',
    '307',
    '308',
    '400',
    '401',
    '402',
    '403',
    '404',
    '405',
    '406',
    '407',
    '408',
    '409',
    '410',
    '411',
    '412',
    '413',
    '414',
    '415',
    '416',
    '417',
    '418',
    '420',
    '421',
    '422',
    '423',
    '424',
    '425',
    '426',
    '428',
    '429',
    '431',
    '444',
    '450',
    '451',
    '497',
    '498',
    '499',
    '500',
    '501',
    '502',
    '503',
    '504',
    '506',
    '507',
    '508',
    '509',
    '510',
    '511',
    '521',
    '522',
    '523',
    '525',
    '530',
    '599',
  ]
  const index = Math.floor(Math.random() * catCodes.length)
  const catImageUrl = ` https://http.cat/${catCodes[index]}.jpg`

  return (
    <>
      {/* <!-- HTML Meta Tags --> */}
      <title></title>
      <meta
        name="description"
        content="RedwoodJS + Supabase Auth + Server Side Rendering"
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="" />
      <meta
        itemProp="description"
        content="RedwoodJS + Supabase Auth + Server Side Rendering"
      />
      <meta itemProp="image" content={catImageUrl} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content="https://e79c-107-143-98-212.ngrok-free.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta
        property="og:description"
        content="RedwoodJS + Supabase Auth + Server Side Rendering"
      />
      <meta property="og:image" content={catImageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta
        name="twitter:description"
        content="RedwoodJS + Supabase Auth + Server Side Rendering"
      />
      <meta name="twitter:image" content={catImageUrl} />

      {/* <!-- Meta Tags Generated via https://heymeta.com --> */}
      <div className="home-page">
        <div
          style={{ border: '3px red dashed', margin: '1em', padding: '1em' }}
        >
          <h1 className={styles.title}>Hello {name}!!</h1>
          <img src={catImageUrl} alt="cat" />
          <RscForm onSend={onSend} />
          <Counter />
        </div>
      </div>
    </>
  )
}

export default HomePage
