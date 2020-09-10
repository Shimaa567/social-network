import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Home extends Component {
  state = {
    posts: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.posts.length > 0 && prevState.loading === true)
      this.setState({ loading: false });
  }

  onClickHandler = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ posts: data, loading: true });
  };
  render() {
    const { posts, loading } = this.state;
    if (loading) return "Please Wait....";
    return (
      <div>
        <div className="home">
          <div className="dark-overlay">
            <div className=" container">
              <h1 className="display-4 text-capitalize mtop2 text-center">
                Become one Of millions around the world, share all news and
                events every second!
              </h1>
              <button
                type="button"
                className="btn btn-primary mtop"
                onClick={this.onClickHandler}
              >
                Show Posts Today!
              </button>
            </div>
          </div>
        </div>
        <section>
          {posts.map((post) => (
            <div>
              <Post title={post.title} body={post.body} />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Home;
