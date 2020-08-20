#!/bin/bash

number_of_files_to_change=$(ls *.png | wc -l)
index=1
current_date=$(date +'%Y-%m-%d')

while [ $index -le $number_of_files_to_change ]; do
  file_to_rename=$(ls *.png | head -$index | tail -1)
  mv "./$file_to_rename" "./$current_date-$file_to_rename"
  index=$(expr $index + 1)
done

## another - and better - solution
# current_date=$(date +%F)

# for file in $(ls *.png); do
#   mv $file ${current_date}-{$file}
# done
