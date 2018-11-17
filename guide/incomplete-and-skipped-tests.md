# Incomplete and skipped tests

## Incomplete tests

When working on a new feature, it is possible to write out the behavior within a new test case class. Your first instinct might be to write empty test methods with the new test case class. But the problem is that Counsel will interpete an empty test method as a successful test. Also calling `this->fail()` don't make sence in this case, cause Counsel will interpreted the test as a failure. If you want to keep track of all incomplete tests you need to mark a test specific as being incomplete. You can also think about it as lights. A successful test will be green and a failing test will be red. We need another yellow light to mark tests as incomplete or not implemented yet.

## Incomplete test example

Example 3.1 shows how to mark a test as incomplete. This will be done by calling the method `markAsIncomplete()`.

```js
counsel_use('TestCase');

class ExampleIncompleteTest extends TestCase
{
    /** @test */
    new_incomplete_feature()
    {
        // Optional: Test anything here, if you want.
        this.assertTrue(true, 'This should already work.');

		// Stop here and mark this test as incomplete.
        this.markAsIncomplete(
            'This test is not implemented yet.'
        );

        // For example: this assertion will never executed
        this.assertTrue(false);
    }
}
```

An incomplete test is indicated by an `I` in the output of the Counsel command-line test runner.

```bash
$ counsel ExampleIncompleteTest --verbose
Counsel {version}
 
.I

Time: 79ms

1 passed, 1 tests
OK, but 1 incomplete

ExampleIncompleteTest->new_incomplete_feature
This test is not implemented yet.
```

## Skipping tests

Not all tests can be run in every environment. Consider, for instance, a database abstraction layer that has several drivers for the different database systems it supports. The tests for the MySQL driver can of course only be run if a MySQL server is available.

## Skipping test example

Example 3.2 shows a test case class, DatabaseTest, that contains one test method, testConnection(). In the test case class' setUp() template method we check whether the MySQLi extension is available and use the `markAsSkipped()` method to skip the test if it is not.

```js
class ExampleSkippedTest extends TestCase
{
	setUp()
	{
		super.setUp();

    	if (! databaseConnection) {
	        this.markAsSkipped(
	            'Database connection not available.'
	        );
        }
	}

    /** @test */
    database_connection()
    {
        // ..
    }
}
```

A test that has been skipped is indicated by an `S` in the output of the Counsel command-line test runner.

```bash
$ counsel ExampleSkippedTest --verbose
Counsel {version}
 
S

Time: 52ms

0 passed, 0 tests
OK, but 1 skipped
 
ExampleSkippedTest
Database connection not available.
```