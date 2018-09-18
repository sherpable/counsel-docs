# Writing IO tests

Another way we can write tests with Counsel is using Input/Output (IO) tests. The example will show basic conventions and steps for writing IO tests with Counsel:

1. IO tests are written in yaml files.

2. IO test file names need to end with \*Test.yaml.

3. The most basic IO test will require the following fields:
  - `test` - a short description about what you want to test
  - `perform` - the input, command to run
  - `expect` - what should be the output

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