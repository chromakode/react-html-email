# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.0 - 2017-09-26
### Changed
- React 16.0.0 compatibility. (@chromakode)
- NOTE: React 16 is generating camel-cased `cellSpacing` and `cellPadding` attributes. This should (in theory) have a negligible effect on rendering since HTML attribute names are case-insensitive. See https://github.com/facebook/react/issues/10863.

## 2.0.1 - 2017-09-26
### Fixed
- Remove old React 0.14.X peer dependency. (@chromakode)

## 2.0.0 - 2017-09-24
### Added
- Add "download" prop to the `A` component. (@joewescott)

### Changed
- React > 15.4.0 is required. This allows removal of the fallback import to `react/lib/DOMProperty` which caused problems with Webpack compilation. (@chromakode)
- `Email` component now defaults to including a `lang="en"` attribute. (@chromakode)
- Use standalone prop-types package. (@taylorwinfield)

### Fixed
- Bug where compatibility notes for CSS properties might not be warned if an unknown property was used. (@chromakode)

## 1.2.0 - 2017-01-23
- Add bodyStyle prop to Email component. (@lulalachen)

## 1.1.3 - 2016-11-16
### Fixed
- Fix unstable import path compatibility with React 15.4.0. (@ryanscottaudio + @chromakode)

## 1.1.2 - 2016-08-07
### Fixed
- Removed failing redundant xmlns injection in React 15.3.0. (@orrybaram + @chromakode)
- Resolved test warnings in React 15.3.0 due to https://fb.me/react-warning-dont-call-proptypes. (@chromakode)

## 1.1.1 - 2016-07-25
### Added
- Add "width", "align", and "valign" props to the `Email` component. (@laurent-skim-it)

## 1.1.0 - 2016-07-18
### Added
- Disable warnings by default when running with `NODE_ENV=production`. (@chromakode)

### Fixed
- Fix border attribute being omitted from HTML output. (@chromakode)
- Fix style validator `strict` and `warn` flags being ignored. (@chromakode)

## 1.0.2 - 2016-04-21
### Fixed
- Fix minor React warning about numeric CSS string values in `Email` component. (@chromakode)

## 1.0.1 - 2016-04-21
### Added
- Accept React 15 as a peer dependency. (@chromakode)

## 1.0.0 - 2016-04-21
### Added
- Data attribute props to components. (@Roilan)
- `alt` tag prop to `Image` component. (@Roilan)
- `headCSS` prop to `Email` component to which creates a `<style>` tag. (@chromakode)

## 0.2.1 - 2016-01-06
### Fixed
- Fix handling of duplicate background row in CSS support matrix.

## 0.2.0 - 2016-01-05
### Added
- Add default export to match documentation.

## 0.1.1 - 2016-01-02
### Added
- Miscellaneous config files to .npmignore.

## 0.1.0 - 2016-01-02
### Added
- Initial public release.
- Documentation.
- 100% test coverage.
