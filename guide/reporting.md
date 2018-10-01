# Reporting

Out of the box Counsel will come with the build-in `DotReporter`. This `DotReporter` will extend the `Repoter` class. The reporter is responsible for rendering the test result into the terminal. The reporter is build with the intention to make it 100% customisable. You can create you own `MyReporter` class, let it extend `DotRepoter` or `Reporter` and customize the methods bellow.

## Helpers

The helper methods are located inside the `Repoter` class and will provide a nice API logging to the terminal.

### log(message = '')
Log something to the terminal with a line break before it.

### appendLog(message)
Log something to the terminal without a line break before it.

### indent(message, level = 1, append = false)
Add intentation to a message with a line break before it by default.

### indentAppend(message, level = 1)
Add intentation to a message without a line break before it.

### addIndentation(spaces = undefined)
Add indentation, this is useful when you need to concatenate 2 string and add indentation between both.

### visualDifference(actual, expected)
Visualize the difference bewteen the actual value and expected value, like `git diff`.

### beautify(value)
Beautify some value. Useful for code blocks or html string.

### visualError(Assertion assertion)
Visualize an assertion error.


## Before

### beforeBoot()

### beforeTest()

### beforeIOTest()

### beforeEachAssertion(Assertion assertion)

### beforeEachTest(Test test)

### beforeEachIOTest(IOTest ioTest)

### beforeEachTestClass(TestClass testClass)


## After

### afterBoot()

### afterTest()

### afterIOTest()

### afterEachAssertion(Assertion assertion)

### afterEachPassedAssertion(Assertion assertion)

### afterEachFailedAssertion(Assertion assertion)

### afterEachTest(Test test)

### afterEachPassedTest(Test test)

### afterEachFailedTest(Test test)

### afterEachSkippedTest(Test test)

### afterEachIncompleteTest(Test test)

### afterEachIOTest(IOTest ioTest)

### afterEachPassedIOTest(IOTest ioTest)

### afterEachFailedIOTest(IOTest ioTest)

### afterEachIOTestWithoutResults(IOTest ioTest)

### afterEachTestClass(TestClass testClass)

### afterEachPassesTestClass(TestClass testClass)

### afterEachFailedTestClass(TestClass testClass)