# 9. Test
## Types of Testing
The main methodology used for unit testing the RAC Web Application is _Test
Driven Development_ (TDD). TDD is where unit tests are written **before** the
actual business logic. This sets up expectations of what a piece of business
logic is suppose to do before it is ever committed to the code. A developer
writes the unit tests that cover all success paths, fail paths, and even
exception paths. Then, the developer writes the business logic in a way that
passes all of the created unit tests. This increases productivity in several
ways. _Debugging_ becomes less necessary, as the unit tests themselves will
alert the developer as to why the business logic is not functioning as expected.
Focusing on testing first requires forward thinking on the side of the
development as to the expectations of a piece of business logic. Lastly, 
TDD gives developers insight into the health of a system. If many tests start
failing, the team needs to look into what expectations have changes since the
tests were created. They may find that the expectations have changed to the
point the tests are obsolete, or they may find that certain pieces of business
logic have lost sight of the expectations and requires refactoring. Unit testing
began at the inception of the project with TDD and has continued throughout
each sprint. An issue with TDD was when expectations changed drastically
during the sixth semester. Changes that required massive rewrites rendered
most unit tests useless and required a lot of effort to update to current 
expectations.

There are five types of systems testing performed against the system.
Functional, Usability, Compatibility, Security, and Business Cycle tests.

- Functional
    - Black-box tests based on business specifications. This type of testing
    looks at results seen by a user through the lens of the application itself.
- Usability
    - Black-box tests based on user interface interactions in the system.
    Making sure UI/UX is smooth and understandable by users. That the system
    is consistent across the board.
- Compatibility
    - Testing centered around verifying the system works on all targeted
    platforms. This may be different operating systems, browsers, hardware,
    screen sizes/resolutions. Looking at _targeted_ platforms is important.
    Testing in situations the system will never be in is useless.
- Security
    - Testing ensuring the system is safe from unwanted interactions, either
    with malicious intent or by accident. This includes making sure the
    system is safe from injection attacks, enumeration attacks, malware, etc.
- Business Cycle
    - Testing ensuring the system will continue to work over many business
    cycles. For example, if a backup is to be run every quarter year then
    testing must confirm the backups will run every quarter without fail.

## Examples of Test Cases
### Functional Example
> Verify the Candidate has entered an email address they have access to. This is
> tested by verifying:
> 
> 1. Candidates cannot log into their account until they have verified their
>     email address.
> 2. Candidates receive an email after registering with a link to a unique
>     verification URL.
> 3. Candidates can log in after visiting their unique verification URL, verifying
>     their email.

This test describes one flow of the system, email verification, and verifies
it is working as intended. This test is a black-box test, as well as test
done via the role of a Candidate. This makes sure the functionality of the
email verification does not just work on paper or via a unit test, but that
the test works in a live environment. The first expectation is an expected
negative result—user not being able to log in—the second is an expected
positive result that involves interacting with another system—the clients email
server—and the third is an expected positive result with the Candidate being
able to log into their account.

### Usability
> Users clicking on the back button expect to be sent to the previous page they
> where on within the RAC System.
>
> 1. Clicking on the back button should always return them to the previous page.
> 2. Click on the back button after logging out should not log the user back
>     into their account.
> 3. The back button should not be enabled if there is no previous page of the
>     RAC applicaiton.

This test describes how the back button is expected to function from the 
point-of-view of a user. The first expectation is that the back button
should bring them to the last page _within the RAC application_. This means
the back button should not send a user outside of the application. The second
expectation is that the back button should not bring the user back to a page
they must be logged into to view. It should clear their session and perform
normal redirection. The last expectation is that the button should be disabled
if their is no previous page _within the RAC application_. As with the first
expectation, we do not want to sent users out of the application.

### Compatibility
> Verify the application works within the most used version of Internet
> Explorer: IE 11
>
> The application flow is 100% compatible with Microsoft Internet Explorer 11
> with few graphical issues.

Internet Explorer, despite no longer being the default for versions of Windows
going forward, is still used by thousands of users. Windows users on any version
other than 10 will find IE as their default. As such, being compatible with
IE 11 is a must. However, IE 11 has fallen behind of modern web standards.
The expectation is that the flow must work on IE 11, however minor graphical
issues or differences from more modern browsers are to be expected.

### Security
> Documents uploaded to the application should never be read/executed within
> the application.
> 
> Documents containing harmful content are never interpreted by the application
> to prevent unwanted interactions.

This test describes how the system avoid being hit with malware despite allowing
external users to upload their own documents. The expectation of never reading
or executing files uploaded to the system prevents possible embedded malware
from being deployed. Files are validated by type and size, then are converted
into bytes to be stored in the database.

### Business Cycle Tests
> Verify adding a new program makes the program accessible to Candidates.

> Adding a program allows it to be selected by new Candidates, or Candidates
> changing their program.

This test ensures that common functionality during business cycles work as
expected. In this case, a program being added to the System.

[System Test Case Document](./files/mHaley_E63_A07_System_Test.docx)
