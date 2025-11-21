# DIRETRIZES DE ENGENHARIA E DEPLOY

## 1. Identidade da Infraestrutura
- **Plataforma de Deploy:** Self-Hosted VPS com Coolify.
- **Containerização:** Docker (Dockerfile já existente na raiz - NÃO ALTERAR sem permissão).
- **Banco de Dados:** Supabase (Gerenciado via CLI).

## 2. Fluxo de Desenvolvimento (SOP)
1. **Database First:** Toda alteração de schema deve ser feita via Migration.
   - Comando: `supabase migration new nome_da_mudanca`
   - Nunca altere o banco de produção diretamente.
2. **Type Safety:** Após migrações, sempre rode `supabase gen types typescript --local > types/supabase.ts`.
3. **Validação:** Antes de pedir deploy, verifique se o build passa: `npm run build`.

## 3. Instruções de Deploy (Para o Agente)
Quando o usuário pedir "Deploy":
1. Verifique se há erros de TypeScript.
2. Faça commit das alterações: `git commit -am "feat: update"`.
3. Faça push para a branch `main`.
4. Avise o usuário: "Código enviado ao GitHub. O Coolify deve interceptar o Webhook e iniciar o build em instantes."

## 4. Variáveis de Ambiente
- Local: Use `.env.local`
- Produção: Instrua o usuário a adicionar as chaves no painel do Coolify se houver novas variáveis.