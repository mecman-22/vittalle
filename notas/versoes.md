# Histórico de versões do site (controle do Mec)

Cada atualização publicada no site ganha uma versão nova, mostrada no rodapé de todas as páginas.
Formato: `0.0.NNNN`. A cada atualização, o último número sobe 1 (0.0.1000 → 0.0.1001 → 0.0.1002…).

Como registrar: a entrada mais nova fica no topo, com versão, data (horário de Brasília), quem fez, o que mudou e o commit.

---

## 0.0.1010 — 07/11/2026
- **Menu e rodapé (todas as páginas):** a aba "Tecidos" agora se chama "Catálogo". O título da página passou a ser "Catálogo de tecidos e cores". O endereço da página não mudou. (pedido do Mec · `efc5ab7`)

## 0.0.1009 — 07/11/2026
- **Foto ampliada (Tecidos e Portfólio):** no celular, o botão "Fechar" e a legenda ficavam por cima da foto. Agora a foto tem espaço próprio no topo e embaixo, e nada se sobrepõe. (pedido do Mec · `74ad1f2`)

## 0.0.1008 — 07/11/2026
- **Tecidos:** as 28 fotos do catálogo foram reprocessadas com melhoria de resolução (de 681 para 1100 px de largura), com menos serrilhado e sem as bordas e o texto que vinham do PDF do fornecedor. A foto ampliada ao clicar também ficou mais nítida. (pedido do Mec · `b79fc82`)

## 0.0.1007 — 07/11/2026
- **Tecidos:** as fotos do catálogo estavam esticadas e ampliadas demais (e por isso borradas). Agora cada cartão mostra a peça inteira, do rosto aos joelhos, com a foto nítida. (pedido do Mec · `5076726`)

## 0.0.1006 — 07/11/2026
- **Visual:** o site voltou às cores antigas (dourado, azul-marinho e bordo) e a página inicial voltou a abrir com a foto ao lado do título, no lugar do banner cinza.
- **Rodapé:** removida a linha com as formas de pagamento (elas continuam no bloco de horários e nas perguntas frequentes). (pedido do Mec · `2a156f6`)

## 0.0.1005 — 07/11/2026
- **Serviços (por ocasião):** dois cartões novos com WhatsApp já escrito: "Padrinhos e pais dos noivos" e "Ajuste da sua peça". A grade passou a ter 3 colunas (6 cartões).
- **Serviços:** o texto da seção agora lembra de chamar cedo quando o evento tem data, porque o sob medida pede tempo para as provas. (rotina Vittalle+ · `1910174`)

## 0.0.1004 — 06/11/2026
- **Rodapé:** todas as páginas agora mostram as formas de pagamento aceitas na loja: crédito, débito, dinheiro e Pix. (rotina Vittalle+ · `4242c18`)

## 0.0.1003 — 05/11/2026
- **Rodapé:** todas as páginas agora mostram no rodapé o endereço (Shopping Nova Iguaçu · Piso 1 · Loja 3034) e o telefone (21) 97267-2477, que no celular liga com um toque. (rotina Vittalle+ · `6fd1fbf`)

## 0.0.1002 — 05/11/2026
- **Compartilhamento:** ao mandar o link do site no WhatsApp, Discord, Facebook etc., a prévia agora mostra a foto do look de blazer azul e óculos escuros (imagem nova img/og-vittalle.jpg, 1200x630), no lugar da foto de catálogo de tecido. Vale para as 6 páginas. (sessão manual · `d131f43` e ajuste do texto alternativo no commit seguinte)

## 0.0.1001 — 05/11/2026
- **Vitrine da página inicial:** fotos escolhidas pelo Mec, em nova ordem: Ternos e Blazer, Esporte Fino, Cinto e Acessórios, Chinelo e Sandália. A foto de sapatos saiu e entrou a do chinelo. (sessão manual · `bc4e020`)

## 0.0.1000 — 05/11/2026
Primeira versão numerada. Junta tudo o que foi publicado até aqui:

- **Versão no rodapé:** as 7 páginas mostram a versão do site. Removida a frase ao lado de "Tudo sobre a Vittalle" na página inicial. (sessão manual · `96c5829`, `96eecf5`)
- **Menu:** em telas médias (981 a 1280px), o menu não encosta mais no botão "Agendar prova". No celular, os 6 itens aparecem em 2 linhas de 3. (sessão manual · `9651e56`)
- **Vitrine:** nova seção "Peças que já saíram daqui" na página inicial, com 4 fotos do portfólio. (sessão manual · `9651e56`)
- **WhatsApp:** o botão do bloco "Evento chegando" passa a avisar que o contato veio do site. (`4543dd5`)
- **Perguntas frequentes:** nova pergunta sobre como cuidar do terno, em processo.html. (rotina Vittalle+ · `99fa2f6`)
- **Acessibilidade:** contorno de foco prata nos blocos escuros. (rotina Vittalle+ · `bff7e05`)
- **Waze:** botão "Abrir no Waze" no bloco de localização. (Mec · `c0431cb`)
- **Domínio:** o site passa a usar vittallespeciale.com.br em todos os endereços. (`7f277f5`, `1118194`)
