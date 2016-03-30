# Definition of Done

A story is considered complete when:

* The intent of the user story is completed.
* Appropriate documentation was created.
    * Module / Theme / Project `README.md`
    * Code comments.
    * `docs/`
* No manual steps are needed for deployment.
    * Each deployment will include: `aquifer build`, `updb`, `master-execute`, `features-revert-all`, `cc all`
* Steps for demoing are documented in the story.
* The pull request links to the story and the story links to the pull request.
* All Behat tests pass.
    * New functionality should have a corresponding test.
* No Drupal Features are overridden.
* Pull request passes code review.
    * Uses Drupal and development best practices.
        * Peer code review.
    * Adheres to [Drupal Coding Standards](https://www.drupal.org/coding-standards).
        * `gulp drupalcs`
    * No PHP Lint errors exist.
        * `gulp phplint`
    * No ESLint errors exist.
        * `gulp eslint`
* Code is merged into `develop`.
* Product Owner accepts result of demo.
