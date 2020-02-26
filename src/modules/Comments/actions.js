import { postsApi } from 'utils/api';

const CommentsPost = {
  setItems: items => ({
    type: 'POSTS:SET_ITEMS',
    payload: items,
  }),
  fetchItem: text => dispatch => {
    postsApi.getId(text).then(({ data })=> {
      dispatch(PostsListActions.appendItem(data));
    });
  }
};