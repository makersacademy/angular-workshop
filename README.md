# Basic angular app

This is a basic setup of an angular app with karma/protractor for testing.

Goal of this workshop is:

* Describe why it is important to keep concerns seperated
* Explain how to use Factories/Services to keep concerns seperated
* Extract logic from a controller into Factories/Services
* Explain why this process is an example of writing [well-crafted software](http://manifesto.softwarecraftsmanship.org/)

## Installation

* Fork the repo
* Rename the app name in the **package.json** and the **bower.json**
* Run `npm install`
* Run tests using `npm test`

## Exercises

* Test drive refactoring the CounterCtrl using a Factory/Service. How does this
  clean the controller up?
* Recreate the ExampleService test-first so that it gets the date from the
  [TimeAPI](http://www.timeapi.org/utc/now). You should use the $http module and
$httpBackend for mocking out calls to the API
