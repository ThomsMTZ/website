import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../navbar';

describe('Navbar Component', () => {
  test('should render the Navbar component', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  test('should display the logo/brand name', () => {
    render(<Navbar />);
    const brandName = screen.getByText('Thomas Martinez');
    expect(brandName).toBeInTheDocument();
  });

  test('should have correct link for the logo', () => {
    render(<Navbar />);
    const logoLink = screen.getByText('Thomas Martinez').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  test('should render all navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
  });

  test('should have correct href for ABOUT link', () => {
    render(<Navbar />);
    const aboutLink = screen.getByText('ABOUT').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/#about');
  });

  test('should have correct href for EXPERIENCE link', () => {
    render(<Navbar />);
    const experienceLink = screen.getByText('EXPERIENCE').closest('a');
    expect(experienceLink).toHaveAttribute('href', '/#experience');
  });

  test('should have correct href for SKILLS link', () => {
    render(<Navbar />);
    const skillsLink = screen.getByText('SKILLS').closest('a');
    expect(skillsLink).toHaveAttribute('href', '/#skills');
  });

  test('should have correct href for PROJECTS link', () => {
    render(<Navbar />);
    const projectsLink = screen.getByText('PROJECTS').closest('a');
    expect(projectsLink).toHaveAttribute('href', '/#projects');
  });

  test('should have correct href for EDUCATION link', () => {
    render(<Navbar />);
    const educationLink = screen.getByText('EDUCATION').closest('a');
    expect(educationLink).toHaveAttribute('href', '/#education');
  });

  test('should have correct CSS classes for styling', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('fixed', 'top-0', 'left-0', 'w-full');
  });

  test('should render navigation list', () => {
    render(<Navbar />);
    const navList = screen.getByRole('list');
    expect(navList).toBeInTheDocument();
  });

  test('should have 5 navigation items', () => {
    render(<Navbar />);
    const navItems = screen.getAllByRole('listitem');
    expect(navItems).toHaveLength(5);
  });
});
