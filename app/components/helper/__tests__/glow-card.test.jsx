import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlowCard from '../glow-card';

describe('GlowCard Component', () => {
  test('should render the GlowCard component', () => {
    render(
      <GlowCard identifier="test">
        <div>Test Content</div>
      </GlowCard>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('should render children correctly', () => {
    render(
      <GlowCard identifier="test-children">
        <h1>Title</h1>
        <p>Description</p>
      </GlowCard>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('should apply correct identifier class to container', () => {
    const { container } = render(
      <GlowCard identifier="unique-id">
        <div>Content</div>
      </GlowCard>
    );
    
    const glowContainer = container.querySelector('.glow-container-unique-id');
    expect(glowContainer).toBeInTheDocument();
  });

  test('should apply correct identifier class to card', () => {
    const { container } = render(
      <GlowCard identifier="card-id">
        <div>Content</div>
      </GlowCard>
    );
    
    const glowCard = container.querySelector('.glow-card-card-id');
    expect(glowCard).toBeInTheDocument();
  });

  test('should have correct styling classes', () => {
    const { container } = render(
      <GlowCard identifier="style-test">
        <div>Content</div>
      </GlowCard>
    );
    
    const article = container.querySelector('article');
    expect(article).toHaveClass('glow-card', 'cursor-pointer', 'border', 'rounded-xl');
  });

  test('should render glows element', () => {
    const { container } = render(
      <GlowCard identifier="glows-test">
        <div>Content</div>
      </GlowCard>
    );
    
    const glowsElement = container.querySelector('.glows');
    expect(glowsElement).toBeInTheDocument();
  });

  test('should handle different identifiers', () => {
    const { container: container1 } = render(
      <GlowCard identifier="id1">
        <div>Content 1</div>
      </GlowCard>
    );
    
    const { container: container2 } = render(
      <GlowCard identifier="id2">
        <div>Content 2</div>
      </GlowCard>
    );
    
    expect(container1.querySelector('.glow-container-id1')).toBeInTheDocument();
    expect(container2.querySelector('.glow-container-id2')).toBeInTheDocument();
  });

  test('should register pointermove event listener', () => {
    const addEventListenerSpy = jest.spyOn(document.body, 'addEventListener');
    
    render(
      <GlowCard identifier="event-test">
        <div>Content</div>
      </GlowCard>
    );
    
    expect(addEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
    
    addEventListenerSpy.mockRestore();
  });

  test('should remove event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document.body, 'removeEventListener');
    
    const { unmount } = render(
      <GlowCard identifier="unmount-test">
        <div>Content</div>
      </GlowCard>
    );
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });

  test('should handle pointer move events', () => {
    const { container } = render(
      <GlowCard identifier="pointer-test">
        <div>Content</div>
      </GlowCard>
    );
    
    const card = container.querySelector('.glow-card-pointer-test');
    expect(card).toBeInTheDocument();
    
    // Simulate pointer move
    fireEvent.pointerMove(document.body, { clientX: 100, clientY: 100 });
    
    // Card should still be in the document after event
    expect(card).toBeInTheDocument();
  });
});
