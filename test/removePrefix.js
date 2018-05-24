var assert = require('assert');
var dikstemmer = require('../index.js');


describe('Dikstemmer', function() {
    describe('#removePrefix()', function() {
        [
            ['ala-una','una'],
            ['alas-dos','dos'],
            ['alas-tres','tres'],
            ['kasama','sama'],
            ['gabundok','bundok'],
            ['ipatago','tago'],
            ['marupok','rupok'],
            ['natago','tago'],
            ['ipakita','kita'],
            ['mayumi','yumi'],
            ['mapapatawa','tawa'],
            ['marami','dami'],
            ['nagkabulutong','bulutong'],
        ].forEach(function(data){
            var entry = data[0];
            var test = data[1];
            it('successfully stemmed ' + entry, function() {
                result  = dikstemmer.removePrefix(entry);

                assert.equal(test,result);
                // console.log(result);
            });
        });
    });

    // describe('#removeSuffix()', function() {
    //     [
    //         ['tirador','tira'],
    //         ['kargador','karga'],
    //         ['tiradora','tira'],
    //         ['kargadora','karga'],
    //     ].forEach(function(data){
    //         var entry = data[0];
    //         var test = data[1];
    //         it('successfully stemmed ' + entry, function() {
    //             result  = dikstemmer.removeSuffix(entry);
    //
    //             assert.equal(test,result);
    //             // console.log(result);
    //         });
    //     });
    // });
    //
    // describe('#removeInfix()', function() {
    //     [
    //         ['inamin','amin'],
    //         ['inalis','alis'],
    //         ['humangin','hangin'],
    //         ['tumingin','tingin'],
    //     ].forEach(function(data){
    //         var entry = data[0];
    //         var test = data[1];
    //         it('successfully stemmed ' + entry, function() {
    //             result  = dikstemmer.removeInfix(entry);
    //
    //             assert.equal(test,result);
    //             // console.log(result);
    //         });
    //     });
    // });
});
