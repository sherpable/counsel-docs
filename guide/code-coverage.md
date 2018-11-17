# Code coverage

In computer science, test coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs. A program with high test coverage, measured as a percentage, has had more of it's source code executed during testing, which suggests it has a lower chance of containing undetected software bugs compared to a program with low test coverage.

- Statement coverage: how many of the statements in the program have been executed.
- Branches coverage: how many of the branches of the control structures (if statements for instance) have been executed.
- Function coverage: how many of the functions defined have been called.
- Line coverage: how many of lines of source code have been tested.

→ [Source](https://www.atlassian.com/continuous-delivery/introduction-to-code-coverage)

```bash
$ counsel --coverage
Running test coverage tool Istanbul: https://istanbul.js.org/.

=============================== Coverage summary ===============================
Statements   : 84.5% ( 1287/1523 )
Branches     : 71.88% ( 409/569 )
Functions    : 85.89% ( 286/333 )
Lines        : 84.97% ( 1278/1504 )
================================================================================
```

Run code coverage with html output format:

```bash
$ counsel --coverage=html
Running test coverage tool Istanbul: https://istanbul.js.org/.
View results: file:///{project-root}/coverage/index.html
```

For all available type of coverage reports see [https://github.com/istanbuljs/nyc#running-reports](https://github.com/istanbuljs/nyc#running-reports)

## Integrate with Codecov
[Codecov](https://codecov.io/) is a great tool to visualize your code coverage.

Add the following json into your package.json file:
```json
"scripts": {
    "coverage": "counsel --coverage && nyc report --reporter=text-lcov > coverage.lcov && codecov"
},
```
