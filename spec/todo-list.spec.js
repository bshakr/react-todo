import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../src/todo-list';
import TodoItem from '../src/todo-item';

describe('empty', () => {
  it('works', () => {
    const todos = [{text: 'Buy milk', isComplete: false }];
    function complete (){};
    const todoList = renderer.create(<TodoList todos={todos} complete={complete} />);
    let tree = todoList.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

