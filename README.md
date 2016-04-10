# emoji-commit-log-convention

> :warning: WIP :construction:


# Commit Message Format
All Commit Message Format **MUST** meet this Text Format:

> NOTE: WIP :construction:
```
<Emoji> [<Type>:] <Subject>
[<BLANK LINE>]
[<Message Body>]
[<BLANK LINE>]
[<Message Footer]
```


# Types
> NOTE: WIP :construction:

- feature
- fix
- improve
- docs
- refactor
- test
- performance
- style
- chore

If the prefix is `feature`, `fix` or `performance`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `docs`, `chore`, `style`, `refactor`, and `test` for non-changelog related tasks.


# Scope
> NOTE: WIP :construction:


# Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end


# Message Body
Just as in the **Subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.


# Message Footer
The Message Footer should contain any information about **Breaking Changes** and also Message Footer should be **recommended** [GitHub Issue](https://github.com/features#issues) ID Reference, Ex. `Issue #27`, `Fixes #1`, `Closes #2`, `Resolves #3`.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.


# Revert
If the commit reverts a previous commit, it should begin with revert:, followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>., where the hash is the SHA of the commit being reverted.


# Emojis
> NOTE: WIP :construction:

## Fixes

| Emoji | Raw Emoji Code | Description |
|:---:|---|---|
| :bug: | `:bug:` | when fixing **bug** |
| :rocket: | `:rocket:` | when fixing **performance** issue |
| :lock: | `:security:` | when fixing **security** issue |
| :globe_with_meridians: | `:globe_with_meridians:` | when fixing **internationalization** |
| :lipstick: | `:lipstick:` | when improving **UI**/Cosmetic |


## Module / Deploy / Configration

| Emoji | Raw Emoji Code | Description |
|:---:|---|---|
| :wrench: | `:wrench:` | when **building** or **deploy** |
| :package: | `:package:` | when **packaging** or **bundling** |
| :sparkles: | `:sparkles:` | when releasing **patch** version |
| :tada: | `:tada:` | when releasing **minior** version |
| :confetti_ball: | `:confetti_ball:` | when releasing **major** version |
| :arrow_up: | `:arrow_up:` | when upgrading **dependencies** |
| :arrow_down: | `:arrow_down:` | when downgrading **dependencies** |

# Refactoring / Tests

| Emoji | Raw Emoji Code | Description |
|:---:|---|---|
| :white_check_mark: | `:white_check_mark:` | when adding **tests** |
| :green_heart: | `:green_heart:` | when fixing the **CI** build |
| :shirt: | `:shirt:` | when removing **linter**/strict/deprecation warnings or **refactoring** |

## Documentation

| Emoji | Raw Emoji Code | Description |
|:---:|---|---|
| :pencil: | `:pencil:` | when updating  **documentation** |
| :copyright: | `:license:` | when deciding or changing **license** |

## Chores

| Emoji | Raw Emoji Code | Description |
|:---:|---|---|
| :hatching_chick: | `:hatching_chick:` | when **initial** commit |
| :construction: | `:construction:` | when **WIP** commits |
| :heavy_plus_sign: | `:heavy_plus_sign:` | when **adding** files |
| :heavy_minus_sign: | `:heavy_minus_sign:` | when **removing** files |


Ask to Be [Creative](http://www.emoji-cheat-sheet.com/)!


# Examples

feature:
```
feature: add 'graphiteWidth' option
```

bug fix:
```
:bug: fix: stop graphite breaking when width < 0.1

Closes #28
```

improve performance:
```
:rocket: fix: remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed. The default graphite width of 10mm is always used for performance reason.
```

revert:
```
revert: feature: add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```


# Others
- Total Characters of the _Subject_ **MUST** be _Less_ than or _Equal_ to **72** Chars Long.
- (IMPORTANT) All **WIP** Commits **Should** be Avoided!.
- (NOTE) Tasks with Commits in `Fixes T###` Format will be Automatically [_Closed as Resolved_](https://help.github.com/articles/closing-issues-via-commit-messages/)!.
- (WARNING) There is a **Space** Character between Multiple Emojis!.
- (WARNING) There is **NO** New-Line After the _Task ID Reference_ Line.
- (NOTE) Every Raw Emoji Text(`:emoji:`) is Counted as One Char!.


# TODO
- [ ] support conventional commit tools (e.g. conventional-changelog)
- [ ] create a conventional commit tools with `golang`


# License

## MIT

[MIT](http://opensource.org/licenses/MIT)
