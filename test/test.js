const assert = require('chai').assert;
const request = require('http');
const { init } = require('../index.js');



describe('Server Testing', function () {

    let server;

    beforeEach(async () => {
        server = await init();
    });


    it('should validate if server is running', function () {
        return server.inject({
                method: 'GET',
                url: '/users'
            })
            .then(
                function (response) {
                    assert.deepEqual(response.statusCode, 200);
                }
            )
    })

    it('should validate if server is running', function () {
        return server.inject({
            method: 'GET',
            url: '/app'
        })
            .then(
                function (response) {
                    assert.deepEqual(response.statusCode, 200);
                }
            )
    })

    it('should invalidate if server is running', function () {
        return server.inject({
                method: 'GET',
                url: '/'
            })
            .then(
                function (response) {
                    assert.notEqual(response.statusCode, 400);
                }
            )
    })
})
