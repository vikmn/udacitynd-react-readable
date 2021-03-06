import { reducer } from './reducer';
import { postActions } from '../actions/.';

describe('Reducer', () => {
    it('Should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual({ categories: {}, posts: {} });
    });
});

describe('Post Actions', () => {
    it('creates a post', () => {

        const initialState = { posts: {} }; 
        const action = postActions.createPost({
                id: 1,
                votes: 1,
        });

        const expectedState = {
            ...action.post
        };

        expect(reducer(initialState, action).posts[action.id]).toEqual(expectedState);
    });

    it('upvoting an existing post returns updated post count', () => {

        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3
                }
            }
        };

        const action = postActions.upvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 4
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });

    it('downvoting a post returns decremented vote count', () => {

        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 3
                }
            }
        };
        const action = postActions.downvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 2
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });

    it('downvoting a post returns 0 when existing vote count is 0', () => {
        const postId = 2;
        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0
                }
            }
        };
        const action = postActions.downvotePost(postId);

        const expectedState = {
                id: postId,
                votes: 0
        };

        expect(reducer(initialState, action).posts[postId]).toEqual(expectedState);
    });

    it('deletes the specified post', () => {
        const postId = 2;

        const initialState = {
            posts: {
                "2": {
                    id: postId,
                    votes: 0,
                    comments: { }
                }
            }
        };

        const action = postActions.deletePost(postId);

        expect(reducer(initialState, action).posts).toEqual({});
    });
    
    it('updates the specified post', () => {
        const postId = 2;

        const originalPost = {
            id: postId,
            title: "original title",
            body: "original body",
            votes: 0,
            comments: {}
        };

        const initialState = {
            posts: {
                "2": originalPost
            }
        };

        const updatedPost = {
            ...originalPost,
            title: "updated title",
            body:"updated body"
        }

        const action = postActions.updatePost(updatedPost);

        expect(reducer(initialState, action).posts["2"])
            .toEqual({
                ...updatedPost
            });
    });
    
    it('gets posts for the specified category', () => {
        const category = { name: "1", path: "1" };
        const post = {
            id: 2,
            votes: 3,
            comments: {},
        };
        const initialState = {
            categories: {
                [category.name]:{ ...category}
            },
            posts: {
                "3": {
                    ...post,
                    id: 3,
                    category:category.name
                }
            }
        };
        
        const action = postActions.receivePosts(category.name, [post]);
        const expectedState = {
            "2": {
                ...post,
                category: category.name,
            },
            "3": {
                ...post,
                id: 3,
                category: category.name,
            }
        };
        expect(reducer(initialState, action).posts).toEqual(expectedState);
    });
});

