import React from 'react';
import { mount } from 'enzyme';
import 'Components/setupTests'
import CommentBox from 'Components/CommentBox/CommentBox.jsx';

let wrapped;
let newComment;
let textArea;
let form;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
    textArea = wrapped.find('textarea');
    form = wrapped.find('form');

    newComment = textArea.simulate('change', {
        target: { value: 'new comment', name: 'userInput'}
    });
    
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment', name: 'userInput' }
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('empties the textarea on form submission', () => {
    newComment;

    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    form.simulate('submit');
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})

