import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Workspace from '../components/Workspace'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test App for Sirius Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="wrapper">
          <div className="content">
            <Sidebar className="sidebar" />
            <Workspace className="workspace" />
          </div>
      </div>
      
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: row;
        }
      `}</style>


      <style jsx global>{`
        body {
          background: #E5E5E5;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Jost" !important;
        }
        `} </style>
    </div>
  )
}
