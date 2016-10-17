'use strict'

//dont need to require mocha bc its a command line tool that gives us describe and it globaly
//must require chai asserts
const { isTrue } = require('chai').assert

describe('Test suite', () =>{
	it('true should be true', () => {
			isTrue(true)
	})
})
