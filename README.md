# git-commit-message-convention

Extend git commit message from angular style


# Commit Message Format
All Commit Message Format **MUST** meet this Text Format:

```
[:<Emoji>: ][<Type>[(<Scope>)]: ]<Subject>
[<BLANK LINE>]
[<Message Body>]
[<BLANK LINE>]
[<Message Footer>]
```


# Types

| Type | Description |
|:---:|---|
| `new`| implemented a new feature |
| `feature`| implemented a new feature (equal `new`) |
| `bug` | for a bug fix |
| `performance` | for a performance issue fix |
| `security` | for a security issue fix |
| `deprecated` | deprecated a feature |
| `improvement` | for a backwards-compatible enhancement |
| `breaking` | for a backwards-incompatible enhancement |
| `update` | update commits |
| `refactor` | for the refactoring |
| `docs` | for the documentation commits |
| `test` | for the testing commits |
| `dependency` | when upgrading or downgrading |
| `config` | when configuration |
| `build` | when building or bundling |
| `release` | published for the real world |
| `wip` | work in progress commits |
| `chore` | other operations commits |


If the prefix is the below types, it will appear in the changelog. 

- `new` (`feature`)
- `bug`
- `performance`
- `security`
- `deprecated`
- `improvement`
- `breaking`


# Scope
The scope could be anything specifying place or category of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, feature1, etc...


# Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end


# Message Body
Just as in the **Subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.


# Message Footer
The Message Footer should contain any information about **Notes** and also Message Footer should be **recommended** [GitHub Issue](https://github.com/features#issues) ID Reference, Ex. `Issue #27`, `Fixes #1`, `Closes #2`, `Resolves #3`.

**Notes** should start with the word `NOTE:` with a space or two newlines. The rest of the commit message is then used for this.


# Revert
If the commit reverts a previous commit, it should begin with revert:, followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>., where the hash is the SHA of the commit being reverted.


# Emojis

| Emoji | Raw Emoji Code | Type | Description |
|:---:|---|----|---|
| :star: | `:star:` | `new` or `feature` | when adding **new feature** |
| :bug: | `:bug:` | `bug` | when fixing **bug** |
| :chart_with_upwards_trend: | `:chart_with_upwards_trend:` | `performance` | when fixing **performance** issue |
| :warning: | `:warning` | `deprecated` | deprecated a feature |
| :zap: | `:zap:` | `improvement` | for a backwards-compatible enhancement |
| :boom: | `:boom` | `breaking` | for a backwards-incompatible enhancement |
| :lock: | `:lock:` | `security` | when fixing **security** issue |
| :lipstick: | `:lipstick:` | `update` | when update or fixing **UI/Cosmetic** |
| :globe_with_meridians: | `:globe_with_meridians:` | `update` | when updating or fixing **internationalization** |
| :shirt: | `:shirt:` | `refactor` | when removing **linter**/strict/deprecation warnings or **refactoring** |
| :white_check_mark: | `:white_check_mark:` | `test` | when adding **tests** |
| :green_heart: | `:green_heart:` | `test` | when fixing the **CI** build |
| :pencil: | `:pencil:` | `docs` | when updating  **documentation** |
| :copyright: | `:license:` | `docs` |  when deciding or changing **license** |
| :arrow_up: | `:arrow_up:` | `dependency` | when upgrading **dependencies** |
| :arrow_down: | `:arrow_down:` | `dependency` | when downgrading **dependencies** |
| :pushpin: | `:pushpin:` | `dependency` | when pined **dependencies** |
| :wrench: | `:wrench:` | `config` | when update **configration** |
| :package: | `:package:` | `build` | when **packaging** or **bundling** or **building** |
| :confetti_ball: | `:confetti_ball:` | `release` | when releasing **major** version |
| :tada: | `:tada:` | `release` | when releasing **minior** version |
| :sparkles: | `:sparkles:` | `release` | when releasing **patch** version |
| :rocket: | `:rocket:` | `release` | when **deploy** |
| :hatching_chick: | `:hatching_chick:` | `chore` | when **initial** commit |
| :construction: | `:construction:` | `chore` | when **WIP** commits |
| :heavy_plus_sign: | `:heavy_plus_sign:` | - | when **adding** files, dependencies, ... |
| :heavy_minus_sign: | `:heavy_minus_sign:` | - | when **removing** files, dependencies, ... |


Ask to Be [Creative](http://www.emoji-cheat-sheet.com/)!


# Examples

new:
```
:star: new(graphite): add 'graphiteWidth' option
```

bug fix:
```
:bug: fix(graphite): stop graphite breaking when width < 0.1

Closes #28
```

improve performance:
```
:chart_with_upwards_trend: performance(graphite): remove graphiteWidth option

The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

revert:
```
revert: new: add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

# Support tools

## conventional-changelog

You can use with `conventional-changelog-cli` and `conventional-github-releaser`.

e.g. conventional-changelog-cli:

    $ npm i --save-dev git://github.com/kazupon/git-commit-message-convention.git
    $ conventional-changelog -i CHANGELOG.md -s -n ./node_modules/git-commit-message-convention/convention.js -r 0

e.g. conventional-github-releaser:

    $ conventional-github-releaser -n ./node_modules/git-commit-message-convention/convention.js -r 0


# TODO
- [x] support conventional commit tools (e.g. conventional-changelog)
- [ ] lint
- [ ] cli
- [ ] create a conventional commit tools with `golang`


# License

## MIT

[MIT](http://opensource.org/licenses/MIT)
