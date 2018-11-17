# The command line test runner

The Counsel command-line test runner can be invoked through the `counsel` command. The following example shows how to run tests with the counsel command-line test runner:

```bash
$ counsel ArrayTest
Counsel {version}

....

Time: 55ms

6 passed, 4 tests
```

When invoked as shown above, the Counsel command-line test runner will look for a ArrayTest.js sourcefile, by default in the tests folder within the current working directory. It will load the file, and expect to find a ArrayTest test case class. Than It will execute the tests within that class.

For each test run, the Counsel command-line tool prints one character to indicate progress:

`.`

Printed when the test succeeds.

`x`

Printed when an assertion fails while running the test method.

`S`

Printed when the test has been skipped (see Incomplete and Skipped Tests).

`I`

Printed when the test is marked as being incomplete or not yet implemented (see Incomplete and Skipped Tests).

## Command line options

The command line test runner provide some useful options:

```bash
$ counsel --help

 Counsel {version}.
 
 Options:
   -h, --help         	Show some help.

   -v, --version        Show counsel's verion number.

   -c, --config         Specify a custom config file.

   -f, --filter         Filter which tests you want to run.

   -s, --suite          Filter which suite to run.

   --ls, --list-suites  Show available test suites.

   --verbose            Show more verbose information.

   --coverage           Generate code coverage report. Supported report types:
   						clover, cobertura, html, json-summary, json, lcov,
   						lcovonly,non e, teamcity, text-lcov, text-summary, text.
    					Default will be text-summary.

   --silent             Run in silent mode, this will not display anything.
   						Usefull for running through a test coverage tool.

   --is-io-test         Mark the current process as an IO test.

   --as-io-test         Run tests normal, but output as if it is an IO test.

   --io-test-filename   Specify the filename from the current IO test.

   --skip-io-tests      Skip all IO tests.
```
