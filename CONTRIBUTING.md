# Contributing to Listz

First of all: thank you for your intrest in contributing to Listz! 🎉

## Creating a new Listz

If you have a nice idea of a collection to add, you can request a new Listz repository [here](https://github.com/listz/listz/issues/new?template=request-a-new-listz-repository.md). When a new Listz repository is created, it is automatically added to the [master list](https://github.com/listz/listz-all) and linked to our CI tools.

## Updating an existing Listz

If you think that an existing Listz is lacking content, you can always fork the repo, edit the content and send a pull request.
After reviewing the pull request, we will add you as a collaborator and than you can accept and merge the pull request yourself, so that your contributions will be added as a commit in the original repo. Before doing so, please run the [test command](https://github.com/listz/listz-template#how-to-use) so that your changes do not break the working version.

## Steps to take for moderators when creating a new Listz

1. Create the [new repository in the Listz organistation](https://github.com/organizations/listz/repositories/new).
2. Add the [new repository in Travis-CI](https://travis-ci.org/organizations/listz/repositories).
3. Run the [new repository script](https://github.com/listz/listz-template/blob/master/new.sh), fix possible mistakes and push new content to the previously created repo.
4. Enable `gh-pages` for the new repository.
5. Add the new repository to the [master Listz](https://github.com/listz/listz-all).
