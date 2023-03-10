import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <div>
              <div className={styles.text_1}>
                {data.datahome.text_one}
              </div>

              <div className={styles.text_2}>
                {data.datahome.text_two}
              </div>

              <div className={styles.text_3}>
                {data.datahome.text_three}
              </div>

              <a href="/contato">Entrar em contato!</a>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch(`http://localhost:8080/`);
  const data = await response.json();

  // console.log("dados",data)

  return { props: {data} };
}
