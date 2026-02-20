# volto-newsletter-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-newsletter-block)](https://github.com/eea/volto-newsletter-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-newsletter-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-newsletter-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-newsletter-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-newsletter-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-newsletter-block&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-newsletter-block&branch=develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-newsletter-block with Docker

      git clone https://github.com/eea/volto-newsletter-block.git
      cd volto-newsletter-block
      make
      make start

Go to http://localhost:3000

### Add volto-newsletter-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-newsletter-block"
   ],

   "dependencies": {
       "@eeacms/volto-newsletter-block": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-newsletter-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-newsletter-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-newsletter-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-newsletter-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
