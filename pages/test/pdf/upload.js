import Head from 'next/head';
import { supabase } from "@/lib/supabaseClient"
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { useState } from 'react';

export default function UploadPDF({docs}) {

    const [docid, setId] = useState(0)

    async function uploadDoc (e) {
        e.preventDefault();
        const { data,error } = await supabase.from("document_content").insert({page_content:docs}).select('id');
        if (error){
            console.log(error);
            return;}
        const rid = data[0].id;
        setId(rid);
        console.log(data[0].id);
        return data[0].id;
    }

  return (
    <div className="container">
      <Head>
        <title>Let&apos; s play</title>
        <meta name="description" content="Generated by kontopro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Upload content to our databse!
        </h1>
        <p>We upload the pdf file to supabase db table document_content. Wes still use the PDFLoader from Langchain so we still store the pdf file to our root folder. Next paragraph contains the already loaded pdf and a button to store its content to the database, with returning id (primary key of table)</p>
       <p>{docs}</p> 
       <button onClick={uploadDoc} >upload the above conent!</button>
       {docid>0?<p>the content was uploaded with documet content id: {docid}</p>:null}
      </main>

      <footer className="footer">
        <p>Powered by{' '} kontopro</p>
          
      </footer>
    </div>
  )
}

export async function getStaticProps( ){
  
    const loader = new PDFLoader('dummy2.pdf'
    , {splitPages: false}
    );
    const documents= await loader.load();
    const docs= documents[0].pageContent;
    const doc= documents[0]
    console.log(doc)

    return {
    props: {docs}
    }
}
