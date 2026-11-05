
 // @vitest-environment jsdom

import React from 'react';

import '@testing-library/jest-dom/vitest';

import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup
} from '@testing-library/react';

import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  afterEach
} from 'vitest';

import App from '../App';

afterEach(() => {
  cleanup();
});

describe('Recipe Sharing App Tests', () => {

  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => []
    });
  });

  test('should display the application heading', () => {
    render(<App />);

    expect(
      screen.getByText(/Recipe Sharing App/i)
    ).toBeInTheDocument();
  });

  test('should display the Add New Recipe form', () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText('Recipe Name')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Cooking Instructions')
    ).toBeInTheDocument();
  });

  test('should display the recipes section', () => {
    render(<App />);

    expect(
      screen.getByText(/All Recipes/i)
    ).toBeInTheDocument();
  });

  test('should display a message when there are no recipes', async () => {
    render(<App />);

    expect(
      await screen.findByText(/No recipes yet/i)
    ).toBeInTheDocument();
  });

  test('should allow users to enter a recipe name', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Recipe Name');

    fireEvent.change(input, {
      target: { value: 'Chicken Fried Rice' }
    });

    expect(input.value).toBe('Chicken Fried Rice');
  });

  test('should fetch recipes when the application loads', async () => {
    render(<App />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/recipes')
      );
    });
  });

});
