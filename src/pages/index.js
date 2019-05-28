import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="d1 pretty-boxes">Weather API</div>
      <div className="d2 pretty-boxes">Animation App</div>
      <div className="d3 pretty-boxes">To Do List</div>
      <div className="d4 pretty-boxes">Github API</div>
      <div className="d5 pretty-boxes">Friend Traits</div>
      <div className="d6 pretty-boxes">Wise Ass App</div>
      <div className="d7 pretty-boxes">Hooks with React</div>
      <div className="d8 pretty-boxes">Web Speech API</div>
      <div className="d9 pretty-boxes">IceBreakers</div>
      <div className="d10 pretty-boxes" style={{ display: "inherit" }}>
        <span>Exist Data</span>
        <button
          onClick={() => console.log("allow")}
          style={{
            backgroundColor: "lightgray",
            borderRadius: "5px",
          }}
        >
          Allow
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
