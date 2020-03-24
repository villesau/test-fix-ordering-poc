# test-fix-ordering-poc

Proof of concept of test runner that is able to tell you in which order you need to fix your tests.

How to test this?

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


