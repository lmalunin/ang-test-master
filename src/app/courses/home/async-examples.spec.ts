import { fakeAsync, tick } from "@angular/core/testing";

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

    it('Asynchronous test example - setTimeout()', fakeAsync(() => {
        let test = false;

        setTimeout(() => {

            console.log('running assertion setTimeout()');

            test = true;


        }, 0);

        tick(0);
        expect(test).toBeTruthy();
    }));
});