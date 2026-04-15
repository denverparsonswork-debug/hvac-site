import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock IntersectionObserver correctly using a class
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

describe('App', () => {
  it('renders the main sections', () => {
    render(<App />);
    
    // Check if Navbar branding is present (use getAllByText as it appears in header and footer)
    const eliteElements = screen.getAllByText(/Elite/i);
    expect(eliteElements.length).toBeGreaterThan(0);
    
    // Check for Hero content
    expect(screen.getByText(/Perfectly/i)).toBeInTheDocument();
    
    // Check for Services section
    expect(screen.getByText(/Our Premium Services/i)).toBeInTheDocument();
    
    // Check for Trust section content
    expect(screen.getByText(/Happy Customers/i)).toBeInTheDocument();
  });

  it('contains the main CTA buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(1);
  });
});
