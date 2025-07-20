#!/usr/bin/env bash
set -euo pipefail

# shellcheck disable=SC2155
readonly CURRENT_FILE_PATH="$(realpath "$0")"

# shellcheck disable=SC1091
source "${CURRENT_FILE_PATH%/*}/utils/print.sh"

readonly PERMANENT_BRANCHES='^(main|staging|nightly)$'
readonly DEVELOPER_BRANCHES='^[a-z0-9._-]+$'
readonly ISSUE_BRANCHES='^[a-z0-9._-]+\/#([0-9]+)([-a-z0-9._]*)?$'
readonly RELEASE_BRANCHES='^release-v[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$'

readonly ALLOWED_BRANCH_NAMES_MESSAGE="""
Branch name does not follow naming conventions: %branch%

Allowed branch names:
    - main, staging, nightly
    - <username>
    - <username>/#<issue_number>[-context]
    - release-v<major>.<minor>.<patch>[-<context>]
"""


function main() {
    local branch

    if test "$#" -gt 0; then
        branch="$1"
    else
        branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
    fi

    if echo "$branch" | grep -Eq "$PERMANENT_BRANCHES"; then
        exit 0
    fi

    if echo "$branch" | grep -Eq "$DEVELOPER_BRANCHES"; then
        exit 0
    fi

    if echo "$branch" | grep -Eq "$ISSUE_BRANCHES"; then
        exit 0
    fi

    if echo "$branch" | grep -Eq "$RELEASE_BRANCHES"; then
        exit 0
    fi

    print error "${ALLOWED_BRANCH_NAMES_MESSAGE//%branch%/${branch}}"
    exit 1
}


main "$@"
