-- Sample Blog Posts for Mike PDR Expert
-- Run this SQL in Supabase SQL Editor to populate the blog with sample content

-- First, get the admin user's profile_id
-- Replace 'YOUR_ADMIN_USER_ID' with the actual UUID from your profiles table

-- Post 1: What is PDR
INSERT INTO posts (title, slug, content, description, cover_image, profile_id, published) VALUES (
  'O que é PDR e como funciona?',
  'o-que-e-pdr-e-como-funciona',
  '# O que é PDR (Paintless Dent Repair)?

PDR, ou **Paintless Dent Repair** (Reparação de Amassados sem Pintura), é uma técnica revolucionária que permite remover amassados e imperfeições do seu veículo sem a necessidade de repintura.

## Como Funciona?

O processo PDR utiliza ferramentas especializadas para **manipular o metal** de volta à sua forma original, trabalhando por trás da superfície amassada. Nossa equipe de especialistas utiliza:

- Ferramentas de precisão desenvolvidas especificamente para PDR
- Iluminação especializada para identificar imperfeições
- Técnicas avançadas de massagem do metal

## Vantagens do PDR

### 1. Preserva a Pintura Original
A maior vantagem do PDR é que ele **mantém 100% da pintura de fábrica**. Isso significa:
- Sem problemas de compatibilidade de cor
- Sem risco de descascamento futuro
- Valor de revenda preservado

### 2. Processo Rápido
Enquanto reparos tradicionais podem levar dias, o PDR geralmente é concluído em **poucas horas**.

### 3. Custo-Benefício
Por não necessitar de materiais como tinta, primers e acabamento, o PDR é significativamente mais econômico.

### 4. Ecologicamente Correto
Sem uso de produtos químicos, solventes ou tintas. Apenas técnica e precisão.

## Quando o PDR é Recomendado?

O PDR é ideal para:
- Amassados de granizo
- Pequenos amassados de porta
- Imperfeições em painéis
- Danos sem comprometimento da pintura

---

Entre em contato conosco para uma **avaliação gratuita** e descubra se o PDR é a solução ideal para o seu veículo!',
  'Descubra como a técnica PDR revolucionou a restauração automotiva, preservando a pintura original e economizando tempo e dinheiro.',
  '/blog/pdr-process.jpg',
  (SELECT id FROM profiles WHERE role = ''admin'' LIMIT 1),
  true
);

-- Post 2: PDR vs Traditional
INSERT INTO posts (title, slug, content, description, cover_image, profile_id, published) VALUES (
  '5 Benefícios do PDR vs. Pintura Tradicional',
  '5-beneficios-do-pdr-vs-pintura-tradicional',
  '# 5 Benefícios do PDR sobre a Pintura Tradicional

Quando seu veículo sofre um amassado, você tem duas opções: reparação tradicional com pintura ou PDR. Veja por que o PDR é a escolha superior:

## 1. 🎨 Preservação da Pintura Original

**PDR:** Mantém 100% da pintura de fábrica, com todos os seus compostos protetores e acabamento original.

**Pintura Tradicional:** Mesmo com a melhor técnica, nunca replica perfeitamente a pintura de fábrica.

## 2. ⚡ Tempo de Execução

**PDR:** Maioria dos reparos concluídos em **2-4 horas**.

**Pintura Tradicional:** Pode levar **vários dias**, incluindo tempo de secagem.

## 3. 💰 Custo

**PDR:** Economia de **40-75%** comparado à pintura tradicional.

**Pintura Tradicional:** Alto custo devido a materiais, mão de obra especializada e tempo.

## 4. 🚗 Valor de Revenda

**PDR:** Preserva o valor original - compradores valorizam pintura de fábrica intacta.

**Pintura Tradicional:** Pode desvalorizar o veículo, pois indica acidente anterior.

## 5. 🌱 Impacto Ambiental

**PDR:** Zero emissões de VOCs (Compostos Orgânicos Voláteis), completamente sustentável.

**Pintura Tradicional:** Uso de produtos químicos, solventes e sistemas de pintura que impactam o meio ambiente.

---

## Conclusão

Para a maioria dos amassados pequenos a médios onde a pintura não foi danificada, o PDR é claramente a escolha superior em todos os aspectos.

**Agende uma avaliação gratuita** e descubra quanto você pode economizar!',
  'Compare PDR com métodos tradicionais e entenda por que a técnica sem pintura é a melhor escolha para o seu veículo.',
  '/blog/comparison.jpg',
  (SELECT id FROM profiles WHERE role = ''admin'' LIMIT 1),
  true
);

-- Post 3: Car Care Tips
INSERT INTO posts (title, slug, content, description, cover_image, profile_id, published) VALUES (
  'Como manter a pintura do seu carro perfeita',
  'como-manter-a-pintura-do-seu-carro-perfeita',
  '# Como Manter a Pintura do Seu Carro Sempre Perfeita

A pintura do seu veículo é uma das primeiras coisas que as pessoas notam. Aqui estão nossas **dicas profissionais** para mantê-la impecável:

## 1. Lavagem Regular (Mas Correta!)

### Faça:
- ✅ Lave a cada 2 semanas
- ✅ Use produtos específicos para automotivo
- ✅ Trabalhe de cima para baixo
- ✅ Seque com microfibra de qualidade

### Não Faça:
- ❌ Lavar sob sol direto
- ❌ Usar detergente doméstico
- ❌ Esfregar com força
- ❌ Deixar secar naturalmente

## 2. Proteção Solar

A exposição prolongada ao sol é um dos maiores inimigos da pintura.

**Soluções:**
- Garagem ou cobertura sempre que possível
- Cera com proteção UV a cada 3 meses
- Filmes de proteção em áreas críticas

## 3. Cuidado com Estacionamentos

Amassados de porta são extremamente comuns em estacionamentos.

**Prevenção:**
- Estacione longe de outros veículos quando possível
- Use protetores de porta
- Considere adesivos de proteção lateral

## 4. Remoção Imediata de Contaminantes

Alguns elementos podem danificar permanentemente a pintura se não removidos rapidamente:

- Excrementos de pássaros (ácidos!)
- Seiva de árvores
- Insetos
- Respingos de alcatrão

**Dica:** Mantenha sempre um spray de limpeza rápida no carro.

## 5. Polimento e Enceramento Profissional

A cada 6 meses, considere um serviço profissional que inclui:
- Clay bar para remoção de contaminantes embutidos
- Polimento para remover micro-riscos
- Cera ou selante de qualidade
- Tratamento de vidros

## 6. Reparos Imediatos

Pequenos amassados e arranhões devem ser tratados o mais rápido possível.

**Por quê?**
- Previne oxidação
- Evita que o dano se expanda
- Mantém o valor do veículo

---

## Conclusão

Manutenção preventiva é sempre mais barata que reparos corretivos. Siga essas dicas e seu veículo manterá aquele brilho de showroom!

**Precisa de um reparo?** Nossa equipe PDR está pronta para ajudar!',
  'Dicas profissionais de um especialista em PDR sobre como proteger e manter a pintura do seu veículo sempre impecável.',
  '/blog/car-care.jpg',
  (SELECT id FROM profiles WHERE role = ''admin'' LIMIT 1),
  true
);

-- Post 4: PDR Sustainability
INSERT INTO posts (title, slug, content, description, cover_image, profile_id, published) VALUES (
  'PDR: A Solução Sustentável para Amassados',
  'pdr-a-solucao-sustentavel-para-amassados',
  '# PDR: Reparação Automotiva Sustentável

Em uma era onde a **sustentabilidade** é cada vez mais importante, o PDR se destaca como a opção ecologicamente responsável para reparação de amassados.

## O Impacto Ambiental da Pintura Tradicional

### Produtos Químicos Nocivos
A pintura automotiva tradicional utiliza:
- Solventes VOC (Compostos Orgânicos Voláteis)
- Primers tóxicos
- Tintas com metais pesados
- Catalisadores químicos

### Energia e Recursos
- Alto consumo de energia para cabines de pintura
- Água em grande quantidade para limpeza
- Descarte de materiais contaminados

## PDR: 100% Livre de Químicos

O processo PDR é completamente mecânico:

✅ **Zero emissões de VOC**
✅ **Sem uso de água**
✅ **Sem descarte de materiais tóxicos**
✅ **Consumo mínimo de energia**

## Além do Meio Ambiente

Os benefícios ambientais do PDR se estendem:

### 1. Preservação de Recursos
Ao manter a pintura original, evitamos:
- Produção de nova tinta
- Fabricação de primers e selantes
- Descarte de embalagens

### 2. Redução de Resíduos
Pintura tradicional gera:
- Latas de tinta vazias
- Filtros de cabine contaminados
- Resíduos de lixamento
- Panos e materiais descartáveis

PDR gera: **Praticamente zero resíduos**.

### 3. Pegada de Carbono
Estudos mostram que PDR tem uma pegada de carbono **até 90% menor** que reparos tradicionais.

## Certificação Verde

Nossa operação PDR é:
- 🌿 Carbon neutral
- 🌿 Livre de químicos tóxicos
- 🌿 Eficiente em energia
- 🌿 Socialmente responsável

## Escolha Consciente

Ao escolher PDR, você está:
- Protegendo o meio ambiente
- Economizando recursos naturais
- Reduzindo poluição
- Apoiando práticas sustentáveis

---

## Conclusão

PDR não é apenas a escolha inteligente para o seu bolso e veículo - é também a escolha responsável para o planeta.

**Faça a diferença.** Escolha PDR para o próximo reparo do seu veículo!',
  'Descubra como o PDR não é apenas eficiente e econômico, mas também a escolha mais sustentável para reparação automotiva.',
  '/blog/sustainability.jpg',
  (SELECT id FROM profiles WHERE role = ''admin'' LIMIT 1),
  true
);
