import React from "react"
import JSONData from "../data/articles.json"

// Currently this loads data from local store rather than fetching from separate GitHub portfolio repo
const Portfolio = () => (
      <table>
        <tr>
            <th><b>Date</b></th>
            <th><b>Title</b></th>
            <th><b>Publication</b></th>
        </tr>

        {JSONData.articles.map((data, index) => {
            return <tr><td>{data.date}</td><td><a href={data.url}>{data.title}</a></td><td>{data.publication}</td></tr>
        })}
        
      </table>
)
export default Portfolio