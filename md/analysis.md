# 6. Analysis
## Architectural Technical Analysis
ASP.NET as our architecture was chosen for us, as that is what the college
chooses to deploy onto it's servers. Utilizing the _Model, View, Controller_
(MVC) approach to our architecture was a quick decision. MVC is more modern,
allows for greater atomicity, is inherently modular, and made the most sense
considering a majority of data displayed to the user was going to be retrieved
from a database. There were few issues with choosing MVC. Getting used to
combining standard HTML with _Razor_ syntax took some time. As well, calling
controllers via AJAX requests made it harder to debug code at first. There was
no proper documentation on _where_ controllers were being called. This was
fixed by enforcing mandatory comments inside controllers that are called
exclusively through AJAX request. These comments would lay out the JavaScript
file containing the call, parameters passed in, and the return value (if any).

_Entity Framework_ (EF) was another requirement for our system. There are three
approaches to EF. _Code-first_, _Model-first_, and _Database-first_.
Essentially, the team could choose either to define the database via
manually written classes, define the classes via manually written database
tables, or define the classes **and** database tables via a manually created
database model. My original recommendation was _code-first_, however the team
settled on _model-first_. _Model-first_ works well--as it offloads class, and
database creation to EF. It also made designing classes/databases much more
of a physical process, which made it easier to describe and evaluate.
Unfortunately, _model-first_ caused issues. Every change to the model required
regenerating **both** the classes, and the database. Sometimes, this would
result in the classes not working the way we expecting, and business logic
would no longer work. Given the chance, I would of returned to _code-first_.

Testing was done through extensive Unit Tests, and Acceptance Tests associated
with backlog items.

[Technical Recommendations](./files/mHaley_E50_A08_TechRecommendationReport.docx)

## Application Analysis
The RAC Application is 4-tiered. The layers, top-to-bottom, are:

1. Presentation Layer
2. Business Logic Layer
3. Data Access Layer
4. Data Layer

The **presentation layer** contains all visual aspects of the system. The actual
interface of the application that is navigated by the user. The **business logic
layer** contains all logic that parses data going to-and-from the
database. The **data access layer** is handled by EF. It contains methods to call
the database and extract specific information. The **data layer** contains our
database. All layers are physically located inside virtual machines hosted by
the college.

## Class Diagram
The initial class diagram was produced based off of the initial client meeting.
The diagram has changed several times over the course of development, as
requirements were changed and interpretations were corrected.

[Final RAC Application Diagram](./files/rac-diagram-class.png)

## Statistical Analysis Report
The statistical analysis was on comparing firearm homicide rates between Canada,
and the United States. We were given stats compiled from several sources, and
had to parse through to generate diagrams and tables.

[Firearm Homicide Statistics Report](./files/mHaley_stats_pea.docx)

## Ethical Analysis
An ethical decision we had to make for the RAC application was the handling of
private information. Specifically, Protected-B information. Candidate
documentation has a high chance of containing information that would fall under
the _Protected B_ status, which contains specific legal requirements for
handling. Someone getting hold of a citizens _Protected B_ information could
result in significant personal, or financial harm to that individual. 

We dealt with this issue by securing the documents, preventing no other
candidates from being able to access documents they do not own. We also added
a mandatory privacy policy to the registration that warns the candidate that
some of their information is in fact _Protected B_, and that they are accepting
the risk of uploading that information.
