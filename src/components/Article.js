import React, { Component } from 'react';
import hhy from '../Main/images/hhy.png';

class Article extends Component {
    render() {
      return (
        <>
  
  
          <article id="HHY" className="panel intro">
            <header>
              <h1>Han Hye Young</h1>
              <p>2022 Portfolio</p>
            </header>
            <a href="/hhy" className="jumplink pic">
  
              <img src={hhy} alt="" />
            </a>
          </article>
  
        </>
      );
    }
  }

  export default Article;