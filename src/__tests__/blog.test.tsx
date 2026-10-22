import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PostsList } from '../pages/PostsList';
import { PostDetail } from '../pages/PostDetail';
import { Login } from '../pages/Login';

describe('Blog Application Tests', () => {
  it('renders list of posts', () => {
    render(
      <MemoryRouter>
        <PostsList />
      </MemoryRouter>
    );
    expect(screen.getByText('Blog Posts')).toBeInTheDocument();
    expect(screen.getByText('Getting Started with React')).toBeInTheDocument();
  });

  it('increments like count when clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/posts/1']}>
        <Routes>
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </MemoryRouter>
    );
    const likeButton = await screen.findByRole('button', { name: /Like/i });
    expect(likeButton).toHaveTextContent('❤️ Like (0)');

    await userEvent.click(likeButton);
    expect(likeButton).toHaveTextContent('❤️ Like (1)');
  });

  it('shows sign-in view when signed out', () => {
    render(
      <MemoryRouter>
        <Login onSignIn={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Sign In Required')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In Now/i })).toBeInTheDocument();
  });
});