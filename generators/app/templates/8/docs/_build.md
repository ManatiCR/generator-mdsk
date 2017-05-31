# Build

The <%= humanName %> distribution code repository does not contain third-party code; instead, it contains only custom code and a mechanism for creating a "build" - a complete version of the software including all third-party components (Drupal, modules, libraries), along with patches and so forth.

A development build creates symbolic links to the custom code within the project so that changes to the codebase can be immediately seen. Drupal site `files` are also symbolically linked in order to persist.

Instructions on how to get started can be found in the `README.md` file and will not be duplicated here.

## Build locations

Builds are created in the `web` directory.

## Executing a build

```bash
composer install
```
