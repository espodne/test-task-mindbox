import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { TodoContextType } from './TodoTypes';

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};