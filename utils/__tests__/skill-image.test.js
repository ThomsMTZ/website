import { skillsImage } from '../skill-image';

// Mock all the imports since they're SVG files
jest.mock('../../app/assets/svg/skills/html.svg', () => 'html-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/css.svg', () => 'css-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/javascript.svg', () => 'javascript-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/react.svg', () => 'react-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/nextJS.svg', () => 'nextjs-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/docker.svg', () => 'docker-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/python.svg', () => 'python-icon', { virtual: true });
jest.mock('../../app/assets/svg/skills/typescript.svg', () => 'typescript-icon', { virtual: true });

describe('skillsImage', () => {
  test('should return correct image for html (lowercase)', () => {
    const result = skillsImage('html');
    expect(result).toBeDefined();
  });

  test('should return correct image for HTML (uppercase)', () => {
    const result = skillsImage('HTML');
    expect(result).toBeDefined();
  });

  test('should return correct image for CSS', () => {
    const result = skillsImage('CSS');
    expect(result).toBeDefined();
  });

  test('should return correct image for JavaScript', () => {
    const result = skillsImage('JavaScript');
    expect(result).toBeDefined();
  });

  test('should return correct image for React', () => {
    const result = skillsImage('React');
    expect(result).toBeDefined();
  });

  test('should return correct image for "Next JS" (with space)', () => {
    const result = skillsImage('Next JS');
    expect(result).toBeDefined();
  });

  test('should return correct image for Docker', () => {
    const result = skillsImage('Docker');
    expect(result).toBeDefined();
  });

  test('should return correct image for Python', () => {
    const result = skillsImage('Python');
    expect(result).toBeDefined();
  });

  test('should return correct image for TypeScript', () => {
    const result = skillsImage('TypeScript');
    expect(result).toBeDefined();
  });

  test('should handle case-insensitive skill names', () => {
    const resultLower = skillsImage('docker');
    const resultUpper = skillsImage('DOCKER');
    const resultMixed = skillsImage('Docker');
    
    expect(resultLower).toBeDefined();
    expect(resultUpper).toBeDefined();
    expect(resultMixed).toBeDefined();
  });

  test('should return undefined for unknown skills', () => {
    const result = skillsImage('UnknownSkill');
    expect(result).toBeUndefined();
  });

  test('should handle special characters in skill names', () => {
    const result = skillsImage('C++');
    expect(result).toBeDefined();
  });

  test('should handle .NET skills', () => {
    const resultDotNet = skillsImage('.NET');
    const resultDotNetCore = skillsImage('.NET Core');
    
    expect(resultDotNet).toBeDefined();
    expect(resultDotNetCore).toBeDefined();
  });
});
