import React from 'react';
import { mount } from 'enzyme';
import 'Components/setupTests'
import CommentBox from 'Components/CommentBox/CommentBox.jsx';
import Root from 'Root';

let wrapped;
let newComment;
let textArea;
let form;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    beforeEach(() => {
        textArea = wrapped.find('textarea');
        form = wrapped.find('form');

        newComment = textArea.simulate('change', {
            target: { value: 'new comment', name: 'userInput'}
        });
    });

    it('has a text area that users can type in', () => {
        newComment;
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
    });
});