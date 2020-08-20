#!/bin/bash

echo "Digite o caminho desejado"

if [ -e $1 ]; then

  if [ -d $1 ]; then
    echo $1 "é um diretório"
  elif [ -f $1 ]; then
    echo $1 "é um arquivo comum"
  else
    echo $1 "não é nem um diretório nem um arquivo comum"
  fi

else
  echo "O caminho $1 é inválido"
fi

sleep 2

echo -e "Imprimindo lista de arquivos do diretório atual\n"
ls -la
