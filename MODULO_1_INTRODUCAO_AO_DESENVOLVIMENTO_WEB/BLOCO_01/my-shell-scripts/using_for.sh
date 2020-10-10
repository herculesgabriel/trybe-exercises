#!/bin/bash

sentence=$@

for word in $sentence; do
  sleep 0.3
  echo $word
done
