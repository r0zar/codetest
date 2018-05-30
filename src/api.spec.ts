import { MBX } from './app/mbx.service';
const mbx = new MBX('');

describe('API', () => {
    it('should build the url for the employees endpoint', () => {
       const url = mbx.get({path: '/employees'});
       expect(url).toBe('/employees');
    });

    it('should build the url for the customers endpoint', () => {
        const url = mbx.get({path: '/customers'});
        expect(url).toBe('/customers');
    });

    it('should build the url for the items endpoint', () => {
        const url = mbx.get({path: '/items'});
        expect(url).toBe('/items');
    });

    it('should add a limit to the url', () => {
        const url = mbx.get({path: '/items', queryParams: {limit: 10}});
        expect(url).toBe('/items?limit=10');
    });

    it('should add an offset to the url', () => {
        const url = mbx.get({path: '/items', queryParams: {offset: 10}});
        expect(url).toBe('/items?offset=10');
    });

    it('should add a greater than or equal to filter to the url', () => {
        const url = mbx.get({path: '/items', queryParams: {price_gte: 100}});
        expect(url).toBe('/items?price_gte=100');
    });

    it('should add a less than filter to the url', () => {
        const url = mbx.get({path: '/items', queryParams: {price_lt: 1000}});
        expect(url).toBe('/items?price_lt=1000');
    });

    it('should do all the things!', () => {
        const url = mbx.get({path: '/items', queryParams: {price_gte: 100, price_lt: 1000, limit: 10, offset: 20}});
        expect(url).toBe('/items?price_gte=100&price_lt=1000&limit=10&offset=20');
    });
});
