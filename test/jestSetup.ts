import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

// console.error = (message) => {
//   if (!/(React.createElement: type should not be null)/.test(message)) {
//     throw new Error(message);
//   }
// };
