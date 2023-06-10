# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Design and implement the Facility-Agent Identifier Schema
Description: Design and update the existing database schema to support custom identifiers for each Agent that a Facility works with. This may involve adding a new table (e.g., FacilityAgent) which maps the custom ids of Agents for each Facility.

Acceptance Criteria: The updated database schema should allow Facilities to assign and save custom identifiers for Agents. The schema should also maintain referential integrity.

Time/effort estimates: Design (2 hours), Implementation (4 hours), Testing (2 hours)

Implementation Details: Work closely with the DBA (or if it's you, carry out the operation) to create a new table or modify the existing one in order to include a custom identifier for each agent.

---

### Ticket 2: Design and implement a Function to Assign and Modify Custom Agent ID
Description: Implement a function that allows Facilities to assign or modify the custom id for an Agent. This function should interact with the new FacilityAgent table or updated schema.

Acceptance Criteria: The function should correctly assign and update the custom id for an Agent for a given Facility.

Time/effort estimates: Design (2 hours), Implementation (4 hours), Testing (2 hours)

Implementation Details: This function should handle any potential exceptions that might occur, like trying to assign a custom id that already exists.

---

### Ticket 3: Modify getShiftsByFacility Function
Description: Update the getShiftsByFacility function to include the custom id of an Agent, along with the existing data it returns.

Acceptance Criteria: The function should return all shifts for a given Facility with the custom id of the Agent, not the internal database id.

Time/effort estimates: Design (1 hour), Implementation (2 hours), Testing (1 hour)

Implementation Details: Ensure that this function joins appropriately with the FacilityAgent table to retrieve the custom id.

---

### Ticket 4: Update generateReport Function
Description: Modify the generateReport function to include the custom id of the Agent in the generated reports.

Acceptance Criteria: The generated report should show the custom id for each Agent instead of the internal database id.

Time/effort estimates: Design (1 hour), Implementation (3 hours), Testing (1 hour)

Implementation Details: Ensure that this function appropriately displays the custom id in the output report.