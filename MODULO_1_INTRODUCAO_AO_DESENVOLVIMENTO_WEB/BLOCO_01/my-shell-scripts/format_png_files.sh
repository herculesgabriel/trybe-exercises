#!/bin/bash

current_date=$(date +%F)
workspace=$1
extension=$2
last_character="${1: -1}"

cd $workspace

for file in $(ls *.$extension); do
  echo "Renomeando '$file' para '${current_date}-${file}'"
  sleep 0.3
  mv $file ${current_date}-${file}
done

## my first solution

# number_of_files_to_change=$(ls *.png | wc -l)
# index=1
# current_date=$(date +'%Y-%m-%d')

# while [ $index -le $number_of_files_to_change ]; do
#   file_to_rename=$(ls *.png | head -$index | tail -1)
#   mv "./$file_to_rename" "./$current_date-$file_to_rename"
#   index=$(expr $index + 1)
# done
