import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx'
import TodoItem from '../src/todo-item';
expect.extend(expectJSX);

describe('TodoList', () => {
  describe('isComplete', () => {
    const todoText = 'Buy some milk';
    
    function renderTodoItem(isComplete) {
      const renderer = TestUtils.createRenderer();
      const todo = {text: todoText, isComplete: isComplete };
      renderer.render(<TodoItem todo={todo} complete={undefined} />);
      return renderer.getRenderOutput();
    }

    it('does not render a strike tag around todo text if todo is not complete', () => {
      const output = renderTodoItem(false)
      expect(output).toNotIncludeJSX(<strike>{todoText}</strike>)
    });

    it('renders a strike html tag around todo text if todo is complete', () => {
      const  output = renderTodoItem(true)
      expect(output).toIncludeJSX(<strike>{todoText}</strike>)
    });
  });
});
