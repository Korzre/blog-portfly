---
layout: post
title: "Configurando CNAME para Landing Page na DigitalOcean"
---

[![Rede](https://networkencyclopedia.com/wp-content/uploads/2019/09/name-resolution.gif)](https://networkencyclopedia.com/wp-content/uploads/2019/09/name-resolution.gif)

#### O que é CNAME e como usá-lo em minha Landing Page?

CNAME ou Nome Canônico é um tipo de registro DNS geralmente utilizado para mapear um subdomínio, como por exemplo um “www” ou “mail” que antecedem o endereço de seu domínio.

Durante a criação de sua Landing Page é possível escolher entre dois modelos: Landing Page Avulsa ou Landing Page Agrupada. Entenda a diferença entre elas aqui neste tutorial.

As Landing Pages Agrupadas são mais utilizadas para materiais gratuitos, webinários, ebooks, produtos e serviços, diferenciando-se apenas no final, como por exemplo: “landing.meudominio.com/meu-ebook“. Uma de suas vantagens é que NÃO é necessário configurar o CNAME para cada Landing Page criada, basta configurar uma única vez e a regra é aplicada a todas as landing pages daquele grupo.

* Definindo um Destino (URL) para Landing Page Avulsa

* Deixe a opção “Avulsa” habilitada.
Insira o nome do seu domínio na caixa de texto.

* Clique no botão “salvar” no rodapé da página para salvar suas alterações.

<b>Obs:</b> Note que na caixa azul aparecerá os dados de registro do DNS que você deve utilizar em seu serviço de hospedagem, assim como ilustra a imagem abaixo.

[![Rede](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/landing-avulsa-2.png?w=1314&ssl=1)](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/landing-avulsa-2.png?w=1314&ssl=1)

#### Definindo um Destino (URL) para Landing Page Agrupada

Nota: Para Landing Pages Agrupadas, a configuração CNAME é feita para o Grupo.

* Deixe a opção “Agrupada” habilitada.
* Selecione o grupo de Landing Page que deseja ou se não possuir um clique no ícone “+” ao lado para criar. Veja neste tutorial como criar grupo de Landing page.

* Insira o destino da sua Landing Page na caixa de texto, conforme ilustração abaixo.

[![Rede](https://i2.wp.com/help.villetarget.com/wp-content/uploads/2018/07/landing-agrupada.png?w=1318&ssl=1)](https://i2.wp.com/help.villetarget.com/wp-content/uploads/2018/07/landing-agrupada.png?w=1318&ssl=1)

#### Configurando CNAME na DigitalOcean

A configuração do CNAME na DigitalOcean será igual tanto para Landing Pages Avulsas quanto para Landing Pages Agrupadas, pois nos exemplos acima utilizamos o mesmo domínio para ilustrar. Lembre-se que, para landing pages agrupadas, basta configurar o CNAME para o Grupo de Landing Pages e depois na criação da Landing page somente escolher o grupo.

* Acesse sua conta.
* Clique sobre o seu domínio que aparece na página inicial, conforme ilustração abaixo.

[![Rede](https://i2.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-1.png?w=1335&ssl=1)](https://i2.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-1.png?w=1335&ssl=1)

* Na seção de “Create new record” clique sobre “CNAME”.

* *Insira na primeira caixa de texto descrita por “Hostname” o domínio que você definiu ao criar sua Landing Page (landing.seudominio.com.br).
* Na sequência, na caixa de texto ao lado descrita por “Is an Alias of” insira o CNAME fornecido pelo villeTarget durante a criação de sua Landing Page (http://landingpages.villetarget.com).
* Na última caixa de texto descrita por “TTL” insira o valor do TTL indicado pelo villeTarget durante a criação de sua Landing Page (14400).
* Por fim clique no botão ao lado “Create Record”, conforme ilustração abaixo.

[![Rede](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-2.png?w=1340&ssl=1)](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-2.png?w=1340&ssl=1)

* Após o registro ter sido criado aparecerá uma mensagem em uma caixa flutuante dizendo que o registro foi criado com sucesso e será listado no topo da tabela, conforme ilustração abaixo.

[![Rede](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-3.png?w=1340&ssl=1)](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/digitalocean-3.png?w=1340&ssl=1)

Agora, só resta publicar sua Landing Page e aguardar para que seu serviço de hospedagem valide o novo registro que foi inserido. O novo DNS pode demorar até 24 horas para se propagar, assim como informamos durante a criação de sua Landing Page, ilustrado na imagem abaixo.

[![Rede](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/tempo-analise.png?w=1305&ssl=1)](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/tempo-analise.png?w=1305&ssl=1)

Após publicar sua página o villeTarget inicia uma rotina que identifica se o registro DNS adicionado já está respondendo, enquanto essa resposta não for autenticada sua Landing Page permanece com status “Analisando”, após sucesso na resposta do DNS esse status é atualizado para “Publicado” e sua página vai ao ar, assim como ilustra a imagem abaixo.

[![Rede](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/analisando.png?w=1310&ssl=1)](https://i0.wp.com/help.villetarget.com/wp-content/uploads/2018/07/analisando.png?w=1310&ssl=1)

#### Referências

Este post foi escrito baseado em um post da  ville Target.
