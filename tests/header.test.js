import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('a').text()).toBe('Presupuesto hoy mismo');
		expect(context.find('img').src()).toBe('./assets/img-compress/xdddd.png');
	});
});
