# 7. Design

## Databases
The RAC Application interfaces with three databases:

1. RAC Application Database
    - The internal database used exclusively for the RAC application. This
    database stores information such as candidate information, self-assessment
    answers and comments, uploaded documents, and copies of the
    programs/courses/competencies/elements for each eligible program.
2. CSAdmin
    - CSAdmin is a tool used internally by the college. CSAdmin handles
    authorizing user permissions for college systems. For example, CSAdmin
    would confirm if a user has administrative permissions for a system. In
    regards to RAC: CSAdmin confirms if the user logging has the RAC Advisor
    role. CSAdmin does not authenticate users information though, that is
    handled by the Active Directory within the college.
3. Clara
    - Clara is a _massive_ database that contains information on—among other
    things—programs, courses, faculty, and students among **all** of the Cegeps
    in Quebec. While Clara is a very well designed database, the sheer amount
    of columns and cells inside each of the tables makes Clara very hard to
    parse through. The RAC application does not talk directly to Clara. Instead,
    information is pulled from a restricted, read-only version of Clara. That
    data is then saved inside our local database. This is to ensure backwards
    compatibility in case the data inside Clara changes in a way that would
    cause issues such as old RAC self-assessments no longer reflecting reality.

## Physical Data Model
A physical data model is a visual representation of a database. It contains
all of the tables, their contents—columns, primary/foreign keys, data types,
etc.—, and their relationships to one-another. Having a physical data model
is extremely useful to developers. It gives a high-level look at the database
that is very clearly laid out. Developers can simply glance at the model and
immediately have a clear understanding of how the database communicates
within itself.

[Example Physical Database Model](./files/mHaley-physical-diagram.png)

### Database Analysis
_Referential Integrity_ could prove to be a pain point for our system,
specifically in regards to data integrity with Clara. As mentioned above, the
RAC application needs to handle changes to course information from Clara. A
RAC self-assessment needs to reflect the program as it was the day the
assessment was started. A RAC Advisor may also need to look at past
self-assessments. This is handled currently by copying data from Clara to our
local database. This means we hold a snapshot of the program as it was the day
it was made. This removes the issue of data changing on Clara affecting our
system. However, RAC is still tightly coupled with Clara. If Clara were to
drastically change, someone would have to retool RAC to reflect this changes.
The same goes for CSAdmin. CSAdmin changing would lock out the RAC Advisor.

Using the _Entity Framework_ solution from _Microsoft_, we were given the option
of going a _code-first_, _model-first_, or _database-first_ approach.

- _Code-first_ is when the developers start by writing the C# classes for the
application first. _Entity Framework_ takes these classes and generates a
database that matches 1:1, using the same names/data types the developer has
given. This approach is great if the programmer(s) is/are more comfortable
writing code vs designing a database. However, defining relationships between
classes can sometimes prove difficult.

- _Model-first_ is when the developers start by designing a physical data model
for the application first. _Entity Framework_ takes this model, generating
both the database **and** the C# classes. This is an extremely _hands off_
approach, abstracting away a lot of work from the developer. This approach is
great if the programmer(s) is/are more comfortable designing a physical
database vs defining C# classes or developing a straight database. However,
this means developers have no control over the C# and database.

- _Database-first_ is the developers start by developing the raw SQL for build
the database itself. _Entity Framework_ takes the database and generates the
C# classes that match 1:1, using the same names/data types the developer has
given. This approach is great if the programmer(s) is/are more comfortable
writing SQL tables vs writing classes. However, this means developers must be
very thorough in their database.

Our team choose to go with _model-first_. This was because we believed it would
be easier to design a physical model than to define a database with C#, or define
C# classes with SQL. However, in the end this proved to be a poor choice.
_Code-first_ would have been a better decision in the end, as our team consisted
of much stronger programmers than database designers. Early on, we could of
used the _Entity Framework_ migration tool to move to _code-first_.

## Database Access Paths
The three most important tables in our database are:

1. User
    - Contains all _users_ inside our database. Contains their general
    information such as: First/last name, address, home number, etc. The users
    login information is stored in it's own table associated with the Microsoft
    Membership Framework.
2. RACRequest
    - Connects all tables needed to view a Candidates RAC request. This is a
    central point for the entire application.
3. Programs
    - Connects all information needed for a single program. Their competencies,
    elements, etc.

These three tables, along with **all** tables in local database, are navigated
using an automatically generated `Id` primary key. This ensures there is no
chance of collusion between similar data entries.

## System Design Models
The software is split into several layers. The presentation layer, the business
logic layer, and the database layer. This abstraction is important, as in theory
each layer could be swapped out, and the application would still function. These
layers are defined partially by the design framwork used for the system called
_Model, View, Controller_ (MVC). The _Model_ represents the data retrieved
in the database layer as objects. The _View_ represents the presentation
layer. The _Controller_ lies between the presentation layer and the business
logic layer. Typically, it passes data manipulated by the business logic to the _View_ to
be rendered. The _View_ generates the pages for the presentation layer dynamically
using the data it recieves from the _Controller_.

## Data Security Plan
The data security plan outlines security factors associated with the
RAC Web Application. These factors include authentication, authorization,
encryption, confidentiality, SSL, backups, privacy, database security,
protection from path truncation/reverse traversal, protection from XSS and
SQL injections, and testing security.

[Security Plan](./files/mHaley_E31_L13_DevProject_Security_Plan.docx)
