fdescribe('Async Testing Examples', () => {

    it('Asynchronous test example with Jasmine done()', (done) => {
        let test = false;
        setTimeout(() => {

            console.log('running assertion');

            test = true;

            expect(test).toBeTruthy();

            done();
        }, 1000);
    });

});