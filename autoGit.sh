#!/bin/bash

# ─── Configurações ────────────────────────────────────────────
REPO_NAME="Atividade-Anime-BR"
REMOTE_URL="https://github.com/Bluepen-Oficial/Atividade-Anime-BR.git"
# ──────────────────────────────────────────────────────────────

# Verifica se já existe um repositório git inicializado
if [ -d ".git" ]; then
    echo "Repositório já existe. Iniciando atualização..."
    echo ""

    git add .

    read -p "Insira a mensagem do commit> " mensagem

    if [ -z "$mensagem" ]; then
        echo "Mensagem do commit não pode ser vazia. Abortando."
        exit 1
    fi

    git commit -m "$mensagem"
    git branch -M main
    git push -u origin main

    echo ""
    echo "Repositório atualizado com sucesso!"

else
    echo "Nenhum repositório encontrado. Criando novo..."
    echo ""

    # Cria README apenas se não existir
    if [ ! -f "README.md" ]; then
        echo "# $REPO_NAME" >> README.md
    fi

    git init
    git add .

    read -p "Insira a mensagem do commit> " mensagem

    if [ -z "$mensagem" ]; then
        mensagem="Primeiro Commit"
    fi

    git commit -m "$mensagem"
    git branch -M main
    git remote add origin "$REMOTE_URL"
    git push -u origin main

    echo ""
    echo "Repositório criado e enviado com sucesso!"
fi