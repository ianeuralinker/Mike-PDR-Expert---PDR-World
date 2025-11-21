# --- ETAPA 1: Pegar os ingredientes (Dependências) ---
FROM node:20-alpine AS deps
# Instala ferramentas necessárias para o sistema
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia a lista de compras (package.json)
COPY package.json package-lock.json* ./

# Instala tudo
RUN npm ci

# --- ETAPA 2: Assar o bolo (Build) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita espionagem do Next.js (deixa mais rápido)
ENV NEXT_TELEMETRY_DISABLED 1

# Aqui o Next.js cria a versão final do site
RUN npm run build

# --- ETAPA 3: Servir o prato (Produção) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Cria um usuário "garçom" para não rodar como chefe (segurança)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia SÓ o que é necessário para o site rodar (deixa muito leve)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# O garçom assume
USER nextjs

# Abre a porta do restaurante
EXPOSE 3000
ENV PORT 3000

# Começa a servir
CMD ["node", "server.js"]