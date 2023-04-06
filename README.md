# UI-AT-Project

### Command to launch Cypress Client
npx cypress open


### Demonstration of the actual test being executed
https://www.loom.com/share/256facb602d74ae6b2953c427577fb63


## Notes

### If I had more time:
- I would **add a fixture for the initial login step**
- **Add cleanup fixture** to delete the project when I’m done with the test to keep the account clean and
reduce performance concerns. This should help prevent confusion and, most of all, help prevent future tests from
failing due to timeouts/perf issues.
- Create component/page files where we can store the locators for specific page elements within each component or page.
  Then the elements could be easily imported across multiple tests and would only have to be updated in one place.
- I’d save the business/project name as a variable and pass it to the last assert to confirm that the project title
matches what was entered in the process of creating it.


## TO DO: 

### Architectural Improvements
- Add Fixtures
  - Create
    - Anything that's going to be used for setting up test data. In this case, we could set up the
    login steps as a setup fixture.
  - Tear Down
    - Anything that's going to be used for tearing down or resetting test data. In this case, we could set up the
    delete project steps as cleanup fixture.
- Components/Pages
- Figure out password encryption so we are securely storing passwords and auth info

### Add more test cases:
- Create a new project
  - Fail/Error
  - Close Create New Project modal
  - Draw a geofence
  - Place a pin
  - Cancel (from projects/new page)
  - Input/Form Validation scenarios
    - Empty Inputs
    - Invalid Inputs
  - Duplicate/project already created
- Project Feed
  - Filter projects
    - Date
    - User
    - Labels
    - Pre-defined filters
      - All
      - Starred
      - My Projects
  - Refresh Projects
- Open an existing project
- Edit an existing project
- Delete an existing project
- Identify other edge cases/scenarios