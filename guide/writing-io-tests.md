# Writing IO tests

Another way we can write tests with Counsel is using Input/Output (IO) tests. The example will show basic conventions and steps for writing IO tests with Counsel:

1. IO tests are written in yaml files.

2. IO test file names need to end with \*Test.yaml.

3. The most basic IO test will require the following fields:
  - `test` - a short description about what you want to test
  - `perform` - the input, command to run
  - `expect` - what should be the output

4. Optional fields for an IO test:
  - `cwd` - specify the current working directory the test
  - `platform` - specify one or more platforms within this test should run
  - `skip` - mark the IO test as skipped
  - `assertions` - specify basic true/false expectations

Example - Testing the famous `ls` command with Counsel.

```yaml
test: |
  "ls" command test
cwd: tests/doubles/ls-dir
perform: |
  ls
expect: |
  bar.txt
  baz.txt
  foo.txt
  sub-1
assertions:
  status: 0
```

## Real-world Counsel IO test example

```yaml
test:
  Dot reporter error true and false output
perform:
  src/counsel.js --config dot-reporter-true-false-reporting-test.js --is-io-test
expect: |
  Counsel {{version}}.

  xx                        2 / 2 (100%)

  x 1) CoreAssertionsTest -> it_is_able_to_assert_true
  {{root}}io-tests/dot-reporter-true-false-test/CoreAssertionsTest.js:6

  5|     {
  6|         this.assertTrue(false);
  7|     }

  Value is not truthy:

  false

  x 2) CoreAssertionsTest -> it_is_able_to_assert_false
  {{root}}io-tests/dot-reporter-true-false-test/CoreAssertionsTest.js:12

  11|     {
  12|         this.assertFalse(true);
  13|     }

  Value is not falsy:

  true

  Time: {{executionTimeFormatted}}
  2 failed, 2 tests
assertions:
  status: 2
  assertionsCount: 2
  assertionsFailuresCount: 2
  assertionsPassesCount: 0
  testsCount: 2
  testsFailuresCount: 2
  testsPassesCount: 0
  progress: 100
```