#!/bin/bash

echo "Digite o caminho desejado"
read file_path

if [ -e $file_path ]; then

  if [ -d $file_path ]; then
    echo $file_path "é um diretório"
  elif [ -f $file_path ]; then
    echo $file_path "é um arquivo comum"
  else
    echo $file_path "não é nem um diretório nem um arquivo comum"
  fi

else
  echo "O caminho informado é inválido"
fi

sleep 2

echo -e "Imprimindo lista de arquivos do diretório atual\n"
ls -la
