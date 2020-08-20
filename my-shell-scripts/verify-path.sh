#!/bin/bash

echo "Digite um caminho até um diretório ou arquivo"
read file_path

if [ -e $file_path ]; then
  echo " O caminho" $file_path "está habilitado!"

  if [ -x $file_path ]; then
    echo "Você tem permissão para editar" $file_path
  else
    echo "Você NÃO foi autorizado a editar" $file_path
  fi

else
  echo "O caminho informado é inválido"
fi
