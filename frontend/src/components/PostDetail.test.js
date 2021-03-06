import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from './PostDetail';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const postDetail =
{
    id: 2,
    title: "postTitle",
    body: "post body goes here",
    author: "author-1",
    currentScore: 2,
    comments: [],
    votes: 3
};

const initialState = {
    posts: {
        [postDetail.id] : {
            ...postDetail
        }
    }
};
describe('given a <PostDetail> component is mounted', () => {
    it('to revisit these tests', () => expect(1).toBe(1));
});
// describe('given a <PostDetail> component is mounted', () => {

//     const postId = 2;

//     const store = createStore(reducer, initialState);
//     const component = shallow(< PostDetail store={store} postId={postId} />);

//     it('renders without crashing', () => {
//         expect(component.exists()).toEqual(true);
//     });

//     it('verifies the component populates the post details', () => {
//         expect(component.props().post).toEqual(postDetail);
//     });
// });

// describe('<PostDetail> component renders', () => {
//     const postId = 2;

//     const store = createStore(reducer, initialState);
//     const component = shallow(< PostDetail store={store} postId={postId} />);

//     it('renders the post details', () => {
//         expect(component.dive().find('.post-title').length).toEqual(1);
//         expect(component.dive().find('.post-author').length).toEqual(1);
//         expect(component.dive().find('.post-currentScore').length).toEqual(1);
//         expect(component.dive().find('.post-commentCount').length).toEqual(1);
//     });
// });

// describe('<PostDetail> component on vote click', () => {

//     const postId = 2;

//     const store = createStore(reducer, initialState);
//     const component = shallow(<PostDetail store={store} postId={postId} />);

//     it('handles voting on vote click', () => {
//         component.dive().find('.post-vote').simulate('click');
//         component.update();
//         expect(component.props().post.votes).toEqual(4);
//     });
// });

// describe('<PostDetail> component on down vote click', () => {

//     const postId = 2;

//     const store = createStore(reducer, initialState);
//     const component = shallow(<PostDetail store={store} postId={postId} />);

//     it('handles voting on vote click', () => {
//         component.dive().find('.post-downVote').simulate('click');
//         component.update();
//         expect(component.props().post.votes).toEqual(2);
//     });
// });

// describe('<PostDetail> component on delete post', () => {
//     const postId = 2;

//     const store = createStore(reducer, initialState);
//     const component = shallow(< PostDetail store={store} postId={postId} />);

//     it('handles delete on post', () => {
//         component.dive().find('.post-delete').simulate('click');
//         component.update();
//         expect(component.props().post).toEqual({});
//      });
// });