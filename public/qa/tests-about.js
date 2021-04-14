const { assert } = require("chai");

suite(
    '"About" Page tests', function(){
        test('pageshouldcontainlinktocontactpage',function(){
            assert($('a[href="/contact"]').length);
        });
    }
);