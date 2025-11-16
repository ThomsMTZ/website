import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

// Mock the personal data
jest.mock('@/utils/data/personal-data', () => ({
  personalData: {
    name: 'Thomas Martinez',
    linkedIn: 'https://www.linkedin.com/in/thomas-martinez/',
    github: 'https://github.com/ThomsMTZ',
  },
}));

describe('Footer Component', () => {
  test('should render the Footer component', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Developer Portfolio by/i);
    expect(footerText).toBeInTheDocument();
  });

  test('should display copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© Developer Portfolio by/i)).toBeInTheDocument();
  });

  test('should display Thomas Martinez name', () => {
    render(<Footer />);
    const nameLink = screen.getByText('Thomas Martinez');
    expect(nameLink).toBeInTheDocument();
  });

  test('should have LinkedIn link', () => {
    render(<Footer />);
    const linkedInLinks = screen.getAllByRole('link');
    const linkedInLink = linkedInLinks.find(
      (link) => link.href && link.href.includes('linkedin.com')
    );
    expect(linkedInLink).toBeInTheDocument();
  });

  test('should have GitHub link', () => {
    render(<Footer />);
    const githubLinks = screen.getAllByRole('link');
    const githubLink = githubLinks.find(
      (link) => link.href && link.href.includes('github.com')
    );
    expect(githubLink).toBeInTheDocument();
  });

  test('should open social links in new tab', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link').filter(
      (link) => 
        link.href && 
        (link.href.includes('linkedin.com') || link.href.includes('github.com'))
    );
    
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  test('should have correct styling classes', () => {
    render(<Footer />);
    const footer = screen.getByText(/Developer Portfolio by/i).closest('div');
    expect(footer?.parentElement?.parentElement).toHaveClass('border-t');
  });

  test('should render LinkedIn icon', () => {
    const { container } = render(<Footer />);
    // Check if LinkedIn link exists (BsLinkedin component is rendered)
    const linkedInLink = container.querySelector('a[href*="linkedin.com"]');
    expect(linkedInLink).toBeInTheDocument();
  });

  test('should render GitHub icon', () => {
    const { container } = render(<Footer />);
    // Check if GitHub link exists (BsGithub component is rendered)
    const githubLink = container.querySelector('a[href*="github.com"]');
    expect(githubLink).toBeInTheDocument();
  });
});
