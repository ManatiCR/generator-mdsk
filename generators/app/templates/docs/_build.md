# Build

The <%= humanName %> distribution code repository does not contain third-party code; instead, it contains only custom code and a mechanism for creating a "build" - a complete version of the software including all third-party components (Drupal, modules, libraries), along with patches and so forth.

The build itself uses the open-source project [Aquifer](https://github.com/aquifer/aquifer).

A development build creates symbolic links to the custom code within the project so that changes to the codebase can be immediately seen. Drupal site `files` are also symbolically linked in order to persist.

Instructions on how to get started can be found in the `README.md` file and will not be duplicated here.

## Build locations

Builds are created in the `build` directory.

Deployable artifacts are created in the `artifacts` directory.

## Executing a build

Practically, Aquifer can execute the build using the command:

```bash
node_modules/.bin/aquifer build
```

Or, if Aquifer is installed globally:

```bash
aquifer build
```
