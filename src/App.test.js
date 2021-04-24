// src/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import MyComponent from './MyComponent';

describe('App component', () => {
   // Test Initial State
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });
  // Test User Interaction / Mouse Click On Button Event
  // Increment Test
  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });
  // Decrement Test
  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });
});
// Snapshot Test Using Renderer
it('matches the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Component Test
const MockMyComponent = () => {
  React.useEffect(() => {
    console.log('using an effect');
  });
  return (<div>Hello World</div>);
};
jest.mock('./MyComponent', () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}));

beforeAll(() => {
  MyComponent.mockImplementation(MockMyComponent);
});

test('renders', () => {
  const { container } = render(<App/>);
  expect(container.textContent)
    .toMatch('Hello World');
});
