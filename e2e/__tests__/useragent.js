/**
 * Internal dependencies
 */
const testItem = require( '../util' );

describe( 'UserAgent Redirect Tester', () => {
	if ( process.env.NODE_ENV !== 'e2e' ) {
		test( 'dummy test', () => {
			expect( true ).toBe( true );
		} );

		return;
	}

	const suite = require( './useragent.json' );

	test.each( suite )( 'Case %#: %s', ( comment, { source, target } ) => {
		return testItem( source, target );
	} );
} );
