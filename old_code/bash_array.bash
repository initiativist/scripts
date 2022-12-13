#! /bin/bash

# $# is the number of arguments.
# $@ are the arguments themselves, separated by a space
#
# Usually, it makes sense to use " around the argument variables, to save for spaces, etc.
#
# Also notable:
#  - $? returns 0 if the last command was successful?
#  - $* returns all args concatenated into a string.

# traverse
argArray=("$@")

for ((i = 0; i < $#; i++)); do
    echo "list[$i] = ${argArray[i]}"
done
