# 10. Deployment
Installing the application involves several steps, all which are outlined in
the provided _Runbook_ document. 

Pre-installation steps include:

- Having a database server running Microsoft SQL Server
- Having an application server running IIS
- An Active Directory instance broadcasting an LDAP connection
- An instance of CSAdmin

Several options must be configured before installing as well. These include
the name of the database, the address to an email server, and the contact
information for the RAC Advisor. A full list is inside the Runbook.

The installation steps involve using Visual
Studio to grab the production version of the RAC Application and deploy it
to an application server running an IIS instance, running scripts to generate a
database schema on a database server running a Microsoft SQL Server instance,
running scripts to create views for a linked CLARA database, and post deployment
testing.

[RAC Runbook](./files/mHaley_Team02_E63_A06_RunBook_Final.docx)
