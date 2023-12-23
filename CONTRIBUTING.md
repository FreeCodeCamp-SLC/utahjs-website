# How to Contribute

Thank you for considering contributing to this project! Any contributions you make are greatly appreciated.
Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms. For instructions on how to contribute, read the rest of this document.

## Getting Started

1. Fork the [repository](https://github.com/FreeCodeCamp-SLC/utahjs-website) on GitHub
2. Clone the forked repository to your local machine
3. Install the dependencies with `npm install` (be sure you run `nvm use` first to ensure you are using the correct node version)
4. Create a branch for your feature or fix with `git checkout -b branch-name` or `git switch -c branch-name`. We recommend naming your branch something like `#123-fix-description` where `123` is the issue number if applicable, followed by a brief description of the change.
5. Make your changes to the code
6. Commit your changes and push the branch to GitHub with `git push -u origin branch-name`
7. Submit a pull request to the main(FreeCodeCamp-SLC) repository's `dev` branch explaining your changes and a quick note on how to best test/verify the changes

## Local Development

To run the site locally for testing and development run `npm start`. This will compile the code and launch a local server at `http://localhost:3000` where you can preview your changes.

## Code Style

This project utilizes Prettier and ESLint for code formatting and linting respectively. Please follow the conventions defined in `.prettierrc` and `.eslintrc` files. There is a pre-commit hook that will automatically format code and check for lint errors on commit.

## Questions

If you have any questions or run into any issues please feel free to [create a new discussion](https://github.com/FreeCodeCamp-SLC/utahjs-website/discussions/new/choose) or reach out to the maintainers. We're happy to help!
