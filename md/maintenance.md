# 12. Maintenance
## Types of Maintenance Projects
### Corrective
Corrective maintenance involves identifying and fixing faults within a piece
of software. Faults are any issues that prevents the software from operating
in the way intended by the product owners. Corrective maintenance is not adding
new features, or preventing faults from occurring in the future.

### Adaptive
Adaptive maintenance is modifying the system to cope with changes. These changes
can be updates to software, operating systems, libraries, etc. It could also be
coping with legal or policy changes that might have been modified or added since
the inception of the application. Adaptive is not adding new or up-and-coming
features, only updating what already exists.

### Perfective
Perfective maintenance improves upon the software. Adding changes to bussiness
requirements given by the clients, or refactoring existing functionality to take
advantage of new software/technologies. Perfective maintenance is not fixing
bugs or other issues.

### Preventative
Preventative maintenance occurs when developers refactor the system to be more
maintainable in the future, or to fix security/operational holes in the system.
Preventative maintenance is not fixing pre-existing bugs in the system unless
they cause security issues.

The maintenance done within the maintenance project in the sixth semester was
**corrective**, **adaptive**, and **perfective**.

## Maintenance Project System
The maintenance project took place during the sixth semester of the program.
The purpose of the maintenance program is to learn how to work on a system that
was not written by myself, my team, or anyone still at the college. Learning
how to inherit a system, how to parse through it, and how to make changes while
not breaking backwards compatibility. It involved maintaining the CSAdmin system
at Heritage College. CSAdmin is used by the college to determine which internal
systems and pages a user is authorized to use.

## Maintenance Project Modifications
Refactoring is the concept of re-writing existing code to enhance performance,
maintainability, code readability, or to implement modern coding standards and
practices. As part of the project, the team refactored the entire system by
switching the main programming language from VB.NET to C#. We also refactored
the entire business logic layer of the application, moving it from database
stored procedures to C# methods.

As part of the project, we fixed the _New Semester_ functionality that is used
after the students have verified their class attendance. This changes the
authorization to match the current student and teacher list. The functionality
did not work on copying program coordinators, which was a main change we made.
Other changes requested were a better look-and-feel for the web application,
and moving the authorization functionality to some sort of external API. The functionality
did not work on copying program coordinators, which was a main change we made.
Other changes requested were a better look-and-feel for the web application,
and moving the authorization functionality to some sort of external API.

## Maintenance Project Methodology
The methodology used for the project was _Agile_. We performed five week
sprints, and performed daily scrums to keep the team up to date. Testing
was performed during the final two weeks of the sprint.

## Maintenance Team
The maintenance team environment was very fluid. Team members were able to
easily switch from task to task without much issues. Team members were open
to go to each other for help, with plenty of collaboration. The team members
were:

- Alexander Beeftink
- Alexandre Stewart
- Sereil Vann Phlek
- Amir Yadollahibastani
- Wei Hao Zou
- Louis Thibodeau
- Isaac Mills
