# 5. Requirements

## Business Problem
The RAC Application converts the current _manual_ workflow of:

1. A candidate contacting the RAC advisor
2. A candidate receiving the self-assessment form
3. A candidate returning the self-assessment form the RAC advisor
4. The RAC advisor sending the self-assessment to one, or many content
    specialists
5. The content specialist marking the self-assessment
6. The content specialists marking being returned to the RAC advisor
7. The RAC advisor setting up a physical meeting with the candidate, the
    content specialist, and themselves
8. A final decision being made, with the candidate discovering their RAC
    status

Now, the entire system has been moved online. A candidate can fill in, and
submit their RAC request without needing to communicate with the RAC advisor.
Their self-assessment, and all related documents, can be sent to assigned
content specialists. The final document can also be generated, and sent through
the system. This takes a lot of weight off of the RAC advisors shoulders, and
makes it easier on the candidate to apply for RAC.

[Elevator pitch for the RAC application](./files/mhaley_RAC_App_Elevator_Pitch.pptx)

## Scope
The application has three main users:

1. The **RAC Advisor**
    - The admin of the system. They oversee the RAC process, and assist
        candidates. The also assign content specialists portions of a
        candidates self-assessment to be evaluated.
2. The **Content Specialist**
    - An expert who is called upon by the RAC advisor to evaluate a candidates
        self-assessment. They determine if the candidates experience is enough
        to warrant completing the competency.
3. The **Candidate**
    - Someone who is looking into completing a DEC, and wants their work
        experience or possible education to be recognized. Their experience
        can then be substituted instead of a course.

The system interfaces with three other systems within the college.

1. The internal e-mail system
2. LDAP
3. CSAdmin

LDAP, and CSAdmin are using for authorizing/authenticating the RAC advisor, and
content specialists internal to the College.

The primary function of the system is to allow candidates to fill out their
self-assessment entirely via the web. They evaluate themselvs based on competency
elements, giving themselves either a: _"I can do this"_, _"I can somewhat do this"_,
or _"I cannot do this"_. The candidate is expected to back up their claims
with both comments, and by referencing documentation that they can upload.
After completion, the candidate can submit their self-assessment, and follow
it's status as it is being evaluated.

Secondary flows include:

- Content specialists evaluating the self-assessment
- RAC advisor sending official documents to the candidate
- RAC advisor overriding comments left by the content specialists
- Notifying the RAC advisor if an event occurs that requires their attention
- etc.

[Example context diagram](./files/mhaley_context_diagram.png)

## Business Requirements
Business requirements are expected functionality as given by the client. They
these are high level requirements, that must be clearly defined so the
development team is in total understanding. Business requirements are split
into two: functional, and non-functional. Functional requirements are **_what_ the
system is expected to do**, while non-functional requirements are **_how_ the system
is expected to work**. Functional requirements may be functionality such as:
authentication, logging, legal requirements, etc. Non-functional requirements
may be: performance expectation, user interface requirements, security, etc.
User stories, and acceptance criteria are used heavily to determine business
requirements.

An example of a non-functional requirement in the RAC application is a mobile
friendly UI. The client expects many candidates will be accessing the site via
their mobile phone, and therefore the site must be usable on any screen size.

The user was included heavily in requirements gathering. Many of the requirements
were gathered during the initial user meeting, where the client laid out their
idea for the system. The development team broke down the clients verbal requirements
into use cases, and user stories. This continued throughout the development
process, where the client was constantly in touch with our interpretations of
his requirements, and was able to correct any misinterpretation or give a
deeper explanation.

[Example user meeting notes 1](./files/meeting-minutes/Sept25_User_Meeting_Meeting_Minutes.docx)

[Example user meeting notes 2](./files/meeting-minutes/Oct16_E50_A09_ProductBacklog_Meeting_Minutes.docx)

[Example user meeting notes 3](./files/meeting-minutes/Dec11_Sprint_Review.docx)

[Example user meeting notes 4](./files/meeting-minutes/Feb9_Sprint_Review_Meeting_Minutes.docx)

## Requirements Model
An example of a completed user story is:

> As a candidate, I want to upload documents via the web application, so that I
> can prove my competencies.

From a business point of view, the candidate must upload various files that are
used as proof of experience. The content specialist takes these files in mind
when evaluating the candidates self-assessment.

[Example acceptance criteria](./files/mhaley_updoc_acceptance.png)

[Screenshot of the completed form](./files/mhaley_updoc_form.png)
