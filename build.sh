#!/bin/bash
BLUE='\033[1;34m'
NC='\033[0m' # No Color

set -e
echo "###### date ######"
date +%d\ %m\ %Y
echo "###### whoami ######"
whoami
pwd
echo "###### last commit message ######"
#git branch | grep \* | cut -d ' ' -f2
comment="$(git log -1)"
printf "${BLUE}${comment}${NC}\n"
echo "###### remove dist dir ######"
rm -r -f dist
echo "###### install dev dependencies ######"
yarn install
echo "###### build ... ######"
yarn build
echo "###### DONE ######"
