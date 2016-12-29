import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx'
import TodoList from '../src/todo-list';
import TodoItem from '../src/todo-item';

expect.extend(expectJSX);

describe('TodoList', () => {
  it('renders a TodoItem for each todo item in todo items array', () => {
    const todos = [{text: 'Buy some milk', isComplete: false}];
    const renderer = TestUtils.createRenderer();
    renderer.render(<TodoList todos={todos} complete={undefined} />);
    const output = renderer.getRenderOutput();
    expect(output).toIncludeJSX(<TodoItem todo={todos[0]} complete={undefined}/>)
  });
});
