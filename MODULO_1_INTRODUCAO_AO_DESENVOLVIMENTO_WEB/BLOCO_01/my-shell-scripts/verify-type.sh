#!/bin/bash

paths=$@

for path_to_verify in $paths; do

  if [ -e $path_to_verify ]; then

    if [ -d $path_to_verify ]; then
      echo "'$path_to_verify' é um diretório"
    elif [ -f $path_to_verify ]; then
      echo "'$path_to_verify' é um arquivo comum"
    else
      echo "'$path_to_verify' não é nem um diretório nem um arquivo comum"
    fi

  else
    echo "O caminho '$path_to_verify' é inválido"
  fi
  sleep 0.2

done

sleep 2

echo -e "Imprimindo lista de arquivos do diretório atual\n"
ls -la
