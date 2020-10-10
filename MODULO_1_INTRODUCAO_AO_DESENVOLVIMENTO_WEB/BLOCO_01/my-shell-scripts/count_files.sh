#!/bin/bash

# get directory as parameter
if [ -e $1 ]; then

  if [ -d $1 ]; then
    number_of_files=`ls $1 | wc -l`
    echo "O '$1' tem $number_of_files arquivos"
  
  else
    echo "O argumento $1 não é um diretório"
  fi

else
  echo "O diretório $1 não existe"
fi
