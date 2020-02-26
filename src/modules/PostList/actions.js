import { postsApi } from 'utils/api';

const PostsListActions = {
  setItems: items => ({
    type: 'POSTS:SET_ITEMS',
    payload: items,
  }),
  appendItem: item => ({
    type: 'POSTS:APPEND_ITEM',
    payload: item,
  }),
  removeItem: id => ({
    type: 'POSTS:REMOVE_ITEM',
    payload: id,
  }),
  fetchItem: id => dispatch => {
    postsApi.getId(id).then(({ data })=> {
      dispatch(PostsListActions.appendItem(data));
    });
  },
  fetchRemoveItem: id => dispatch => {
    if (global.confirm('Are you sure you want to delete the article?')) {
      dispatch(PostsListActions.removeItem(id));
      postsApi.remove(id);
    }
  },
  fetchItems: () => dispatch => {
    postsApi.get().then(({ data }) => {
      dispatch(PostsListActions.setItems(data));
    });
  },
};

export default PostsListActions;