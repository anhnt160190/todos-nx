import React from 'react';
import { Todo } from '@myorg/data';

export const Todos = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map((t, index) => (
        <li className={'todo'} key={index}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
