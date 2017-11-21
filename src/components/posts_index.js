import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

//{ fetchPosts } below is actually { fetchPosts: fetchPosts } shortened using es6 syntax - video 127
export default connect(null, { fetchPosts })(PostsIndex);
