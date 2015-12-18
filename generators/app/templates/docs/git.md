# Git

## Branching

Repositories associated with the Meredith Agrimedia distribution will be using a basic [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

* Production branch: `master` - merge into
* Development branch: `develop` - branch off
* Feature branch prefix: `feature/` - branch from `develop`
* Release branch prefix: `release/` - fork from `develop`
* Hotfix branch prefix: `hotfix/` - fork from `master`

Branch names should start with the JIRA Story identifier, followed by a dash, then a short description. For example:

* `MA-138-how-to-article`
* `MA-142-article-rss`
* `MA-210-install-solr`

Branches should be deleted locally and remotely once merged.

## Commits

Commit early, commit often, and push often! Keep your commits [atomic as possible](http://seesparkbox.com/foundry/atomic_commits_with_git).

### Commit messages

Commit messages should start with the JIRA Story identifier, followed by a colon, then a brief description of what occurred. For example:

* `MA-251: Documenting workflow, definition of done.`
* `MA-131: Refactoring tests to use newly renamed fields.`
* `MA-243: Pathauto pattern for Authors.`
