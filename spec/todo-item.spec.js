import React, { Component } from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../src/todo-item';

describe('TodoItem', () => {
  const todo = { text: 'Buy milk', isComplete: true };
  function complete (){};
  
  it('renders', () => {
    const todoItem = shallow(<TodoItem todo={todo} complete={complete} />);
    expect(todoItem.contains(<strike>{todo.text}</strike>)).toEqual(true);
  });
});

