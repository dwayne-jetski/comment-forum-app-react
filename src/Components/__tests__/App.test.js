import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';
import 'Components/setupTests'
import CommentBox from 'Components/CommentBox/CommentBox.jsx';
import CommentList from 'Components/CommentList/CommentList.jsx';


let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});

/* it('displays the comment box appropriately', () => {
    expect(wrapped.find(CommentBox).contains(<div>Comment Box</div>) == true);
}); */