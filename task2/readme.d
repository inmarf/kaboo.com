
In the second and BONUS task you are required to implement an end2end automated test case using the techonologies, url and accounts mentioned above so that the following BDD (Behaviour driven development) Scenario is checked against the url. Note that the purpose of this test is to:
a) Demonstrate your ability to understand Page Object model and take advantage on the E2E testing
b) Build automated tests, given some specs and adapting the Page Object accordingly so that bugs can be flagged
c) Surprise us with your skills (tricks to implement code) and find bugs that we didn't even know yet!
d) present the result of the tests in HTML format (any tool you want) for easy reading
NOTE: The automation test exists in order to find bugs, so don't be afraid if one of the tests fails. But when it fails, let us know WHERE and WHY :)
Scenario: 1-Check that the Kaboo signup is working properly 
 Given user is on /signup page
 When fills all fields with valid data on step 1
 And clicks NEXT
 And fills all fields with valid data from step 2
 Then register button is enable and clickable
Scenario: 2-Check that the Kaboo login is working properly (user registered or use autouk / Autotest1 )
 Given user is on /login page
 When fills username/password
 And clicks Log in button
 Then user should be redirected to account page /profile

# Results
 open config/config.js and replace in line baseUrl: 'http://username:password@qatest.staging.kaboo.com', replace username and password by the correct values
In one terminal
webdriver-manager start

In another terminal (inside the folder ~/kaboo.com/task2)
npm test
I'm getting this error:

$ npm test

> protractor-cucumber@1.0.0 test /home/iruiz/kaboo.com/task2
> protractor config/config.js

[19:43:17] I/launcher - Running 1 instances of WebDriver
[19:43:17] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
[19:43:19] W/launcher - Ignoring uncaught error WebDriverError: unknown error: Chrome failed to start: exited abnormally
  (unknown error: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
  (Driver info: chromedriver=2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706),platform=Linux 4.9.0-4-amd64 x86_64) (WARNING: The server did not provide any stacktrace information)
Command duration or timeout: 1.05 seconds
Build info: version: '3.14.0', revision: 'aacccce0', time: '2018-08-02T20:13:22.693Z'
System info: host: 'debian', ip: '127.0.1.1', os.name: 'Linux', os.arch: 'amd64', os.version: '4.9.0-4-amd64', java.version: '1.8.0_161'
Driver info: driver.version: unknown
[19:43:19] E/launcher - BUG: launcher exited with 1 tasks remaining
npm ERR! Test failed.  See above for more details.

I'm running the test in a Debian Chrome.
I've investigated and tried some different things but not runnin. 
