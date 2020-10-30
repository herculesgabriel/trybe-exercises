import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import { fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercise 1', () => {
  it('should have a button to add a task in the document', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.value).toBe('Adicionar');
  });

  it('save the text of the input when the button is clicked', () => {
    const { getByLabelText, getByRole, getByTestId } = render(<App />);
    const button = getByRole('button');
    const input = getByLabelText('Tarefa:');
    const listItems = getByTestId('ul');
    const task = 'My cool task';

    fireEvent.change(input, { target: { value: task } });
    fireEvent.click(button);

    expect(input.value).toBe('');
    expect(listItems.children.length).toBe(1);
    expect(listItems.children[0].textContent).toBe(task);
  });
});

describe('Exercise 2', () => {
  it('should save all tasks of the input in the list', () => {
    const { getByLabelText, getByRole, getByTestId } = render(<App />);
    const button = getByRole('button');
    const input = getByLabelText('Tarefa:');
    const listItems = getByTestId('ul');
    const task1 = 'My cool task 1';
    const task2 = 'My cool task 2';
    const task3 = 'My cool task 3';

    fireEvent.change(input, { target: { value: task1 } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: task2 } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: task3 } });
    fireEvent.click(button);

    expect(input.value).toBe('');
    expect(listItems.children.length).toBe(3);
    expect(listItems.children[0].textContent).toBe(task1);
    expect(listItems.children[1].textContent).toBe(task2);
    expect(listItems.children[2].textContent).toBe(task3);
  });

  it('should render the string passed as props', () => {
    const task = 'My cool task';
    const { container } = render(<Item content={task} />);
    const div = container.querySelector('div');

    expect(div.textContent).toBe(task);
  });
});