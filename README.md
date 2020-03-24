# test-fix-ordering-poc

Proof of concept of test runner that is able to tell you in which order you need to fix your tests.

Often times your test suite has bunch of different kind of tests: Integration tests, unit tests, api tests all happily mixed up in the same test setup.Some times errors happen and you break bunch of tests at once. How on earth can you know what tests to fix _first_? Especially with a a code base you are not yet that familiar with it might be hard. And some times even with the code base you _are_ familiar with it might still be hard.

There's an old outdated saying that your tests are good if you break one unit of code and it only fails single test.  Reasoning for this saying is easy to understand: The test suite does not give you any help on what tests to actually look at when fixing the problem. In modern test setups you have both unit and integration tests (like you should have!) in the same suite. You break your unit, and bunch of your integration tests blows up as well.

This proof of concept gives you hint of the order you should perform your test fixes. You can happily messa around and break tests and this setup guides you to easiest possible test to fix first. And since often times tests are layered (multiple tests test the same piece of code), as a side effect you are very likely to fix some other test cases along the way without having to worry about them at all.

![Screenshot](Screenshot.png)

# How to try this out?

1. clone my fork of Jest: https://github.com/villesau/jest/tree/test-ordering
2. checkout branch `test-ordering`
3. run `yarn` in the fork
4. run `yarn build`  in the fork
5. run `yarn link` in the fork
6. clone this repo `git@github.com:villesau/jest.git`
7. run `yarn` in this repo
8. run `yarn link "jest-cli"` in this repo
9. run `yarn test` in this repo, see the results

# How this works?

This profiles all the test cases on test case level and calculates "depth" of
the function chain: Shortest chain will be suggested to be fixed first. The shortest chain means
the smallest footprint for the test. So that's likely to be the shortest path to your actual
error in your code and is most likely to fix also other failing test cases.

Note: This does not take beforeEach & beforeAll into account. In a more robust solution it likely should, since they are likely places to fail too.

