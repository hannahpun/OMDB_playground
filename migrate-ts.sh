#!/bin/bash -x

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
project="$1"
folder="$2"
glob="$2/**/*.{ts,tsx}"
app="$project/$glob"
types="../../../../node_modules/@types/**/*.d.ts"

# STEP 1 - format files in so prettier changes do not show up in diff because ts-migrate uses prettier
function ts_migrate_format_eslint {
    npx eslint "$project/$folder" -c "$project/.eslintrc" --fix
    git add .
    git commit -a -m "$branch - formatting: $folder"
}

# STEP 2 - rename files from .js to .ts
function ts_migrate_rename {
    yarn ts-migrate rename $project -s "$folder" -s "$types"
    npx eslint "$app" -c "$project/.eslintrc" --fix
    git add .
    git commit -a -m "$branch - rename .js -> .ts: $folder"
}

# STEP 3 - fix TypeScript errors, using codemods
function ts_migrate_codemods {
    yarn ts-migrate migrate $project --plugin=hoist-class-statics -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=react-props -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=react-class-state -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=react-class-lifecycle-methods -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=react-default-props -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=react-shape -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=declare-missing-class-properties -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=member-accessibility -s "$glob" -s "$types"
    # yarn ts-migrate migrate $project --plugin=jsdoc -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=explicit-any -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=add-conversions -s "$glob" -s "$types"
    yarn ts-migrate migrate $project --plugin=ts-ignore -s "$glob" -s "$types"
    npx eslint "$app" -c "$project/.eslintrc" --fix
}

function ts_migrate_typecheck {
    npx tsc $project/$folder/**/* --noEmit
}

if [[ $* == *--full* ]]; then
    echo "--------------Running full migration------------------"
    sleep 3
    ts_migrate_format_eslint
    ts_migrate_rename
    ts_migrate_codemods
else
    if [[ $* == *--check* ]]; then
        ts_migrate_typecheck
    else
        echo "--------------Running codemods--------------"
        ts_migrate_codemods
    fi
fi

