import React from 'react';
import { FullPost } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PostsListActions from '../../PostList/actions';

class FullPostContainer extends React.Component {
  componentDidMount() {
    const { post, postId, fetchItem } = this.props;
    if (!post) {
      fetchItem(postId);
    }
  }
  render() {
    const { post } = this.props;
    return (
      <FullPost body={post && post.body} createdDate={post && post.createdDate} id={post.id} />
    );
  }
}

const mapStateToProps = ({ posts }, { match }) => ({
  post: posts.items && posts.items.filter(post => post.id === match.params.id)[0],
  postId: match.params.id,
});

export default withRouter(
  connect(
    mapStateToProps,
    PostsListActions,
  )(FullPostContainer),
);