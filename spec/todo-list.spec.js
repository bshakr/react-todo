import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../src/todo-list';
import TodoItem from '../src/todo-item';

describe('TodoList', () => {
  const todos = [{text: 'Buy milk', isComplete: false }];
  function complete (){};
  
  it('renders component using jest', () => {
    const todoList = renderer.create(<TodoList todos={todos} complete={complete} />);
    let tree = todoList.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
