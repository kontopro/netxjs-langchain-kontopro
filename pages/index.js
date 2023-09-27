import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Let&apos; s play</title>
        <meta name="description" content="Generated by kontopro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Let&apos; s play with Langchain and Next.js!
        </h1>

        <p>First things first: Supabase with pg vector enabled!!</p>

      </main>

      <footer className="footer">
        <p>Powered by{' '} kontopro</p>
          
      </footer>
    </div>
  )
}
