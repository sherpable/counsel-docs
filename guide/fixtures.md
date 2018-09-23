# Fixtures

One of the most time-consuming parts of writing tests is writing the code to set the world up in a known state and then return it to its original state when the test is complete. This known state is called the `fixture` of the test.

In [Example 1.1](writing-tests.html#example), the fixture was simply the array that is stored in the `$stack` variable. Most of the time, though, the fixture will be more complex than a simple array, and the amount of code needed to set it up will grow accordingly. The actual content of the test gets lost in the noise of setting up the fixture. This problem gets even worse when you write several tests with similar fixtures. Without some help from the testing framework, we would have to duplicate the code that sets up the fixture for each test we write.

Counsel supports sharing the setup code. Before a test method is run, a template method called `beforeEach()` is invoked. `beforeEach()` is where you create the objects against which you will test. Once the test method has finished running, whether it succeeded or failed, another template method called `afterEach()` is invoked. `afterEach()` is where you clean up the objects against which you tested.

It is also possible that you only need to setup the world once for a specific test class. It that case you can invoke the `setUp()` method. `setUp()` is only called once before each test class. On the other hand it is also possible to cleanup your test objects after each test class. This is when you want to invoke the `tearDown()` method.

## setUp()

This fixture will run before each test case class.

## beforeEach()

This fixture will run before each test with a test case class.

## afterEach()

This fixture will run after each test with a test case class.

## tearDown()

This fixture will run after each test case class.