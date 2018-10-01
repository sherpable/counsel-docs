# Assertions

Counsel create a global `Assertions` object that will contains all available assertions. The `TestCase` class your tests will extend also delegate calls like ```this.assertEquals('bar', 'bar')``` to the `Assertions` class.

## All available assertions

### assertTrue(actual, message)

### assertFalse(actual, message)

### assertEquals(expected, actual, message)

### assertNotEquals(expected, actual, message)

### assertCount(expected, countable, message)

### assertContains(regex, contents, message)

### assertNotContains(regex, contents, message)

### expectException(exception, exceptionMessage, failureMessage)

### notExpectException(exception, failureMessage)
