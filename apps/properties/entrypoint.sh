#!/bin/ash

VARIABLES_TO_SUBSTITUTE='FEATURE_TOGGLE_BOOLEAN FEATURE_TOGGLE_DATE API_ENDPOINT SECRET_NUMBER SECRET_STRING NEXT_PUBLIC_FEATURE_TOGGLE_BOOLEAN NEXT_PUBLIC_FEATURE_TOGGLE_DATE NEXT_PUBLIC_API_ENDPOINT NEXT_PUBLIC_SECRET_NUMBER NEXT_PUBLIC_SECRET_STRING'

APP_PREFIX="APP_"
for VARIABLE in $VARIABLES_TO_SUBSTITUTE
do
    echo "Checkng that we've set a Environment Variable for $VARIABLE"
    ENV_VARIABLE=$(printenv $VARIABLE)

    test -n "$ENV_VARIABLE"

    PLACEHOLDER="$APP_PREFIX$VARIABLE"

    echo "Replacing all $PLACEHOLDER references with $ENV_VARIABLE"

    find /usr/src/app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s~$PLACEHOLDER~$ENV_VARIABLE~g"
done

echo "Starting Properties Application"
npm run start