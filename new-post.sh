#!/bin/bash

#
# ESTE SCRIPT AUTOMATIZA A CRIAÇÃO DO POST NO JEKYLL
#
# Uso:
# ./new-post.sh "Titulo do post" "Descrição do post"

if [ -z $1 ]; then
    echo "usage: $0 \"Título do post\" \"Descrição do post\""
    exit
fi

# titulo do post
titulo=$1

# limpa o titulo para gerar o nome do arquivo
nome=`echo ${titulo} | tr [:upper:] [:lower:] | sed 's/[[:space:]]/-/g' | sed 's/[^a-z0-9-]//g' | iconv -t ascii//translit`

# define o nome do arquivo
arquivo="_posts/`date +%Y-%m-%d-`${nome}.md"

# cria o arquivo e insere o cabecalho do post
echo "---
layout:      post
title:       '${titulo}'
date:        `date +%Y-%m-%d\ %H:%M:%S\ %z`
update:      
description: '${2}'
author:      robertopc
published:   true
tags:        []
---

" > ${arquivo}

# abre o arquivo para edita-lo
vi ${arquivo}
