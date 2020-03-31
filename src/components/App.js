import React, { PureComponent } from "react";
import articles from "../fixtures.js";
import "bootstrap/dist/css/bootstrap.css";
import ArticleList from "./ArticleList/Article_list";

class App extends PureComponent {
  state = {
    reverted: false
  };

  render() {
    console.log("---", 1);
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">
            Статьи
            <button className="btn" onClick={this.revert}>
              Реверсировать
            </button>
          </h1>
        </div>
        <ArticleList
          articles={this.state.reverted ? articles.slice().reverse() : articles}
        />
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    });
  };
}

export default App;
