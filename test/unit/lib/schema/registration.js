const chai = require('chai');
const should = chai.should();
const Reservation = require("../../../../lib/schema/reservation");

describe('Reservation Schema', function(){
    context("Date and Time Combination", function(){
        it("should return a valid ISO 8601 standard date and time", function(){
            const date = '2017/06/10';
            const time = '06:02 AM';
            Reservation.combineDateTime(date, time).should.equal('2017-06-10T06:02:00.000Z');
        });

        it("should return null on a bad date and time", function(){
            const date = 'ewtew';
            const time = 'fdgf';
            should.not.exist(Reservation.combineDateTime(date, time));
        });
    });
});