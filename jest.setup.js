// Configure or set up a testing framework before each test.
import '@testing-library/jest-dom';
jest.mock('src/backend/generate-image', jest.fn());
