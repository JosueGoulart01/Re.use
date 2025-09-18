# RE.USE

**Davi Nunes Carvalho, davinunescarvalho35@gmail.com**

**Josue Carlos Goulart dos Reis, jcgreis@sga.pucminas.br**

**Luiz Fernando Batista Moreira, bluizfernando720@gmail.com**

**Matheus Henrique Tavares Malta Soares, matheushtmalta@gmail.com**

**Nicolas Kiffer de Oliveira Soares, nicolask.soares2@gmail.com**

---
Professores:

**Eveline Alonso Veloso**

**Juliana Amaral Baroni de Carvalho**

---

_Curso de Engenharia de Software_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. A indústria da moda é uma das maiores responsáveis pela poluição ambiental, gerando altos volumes de resíduos têxteis. O projeto Re.use surge como uma solução para promover a economia circular, facilitando a compra e doação de roupas usadas. A plataforma digital proposta visa conectar pessoas que desejam desapegar de suas peças com consumidores em busca de alternativas sustentáveis e acessíveis. O objetivo do projeto é desenvolver um sistema eficiente para o cadastro, triagem e redistribuição das roupas. Como resultado, espera-se contribuir para a redução do desperdício têxtil e incentivar práticas de consumo mais conscientes, facilitando o acesso a moda sustentável e ampliando a reutilização de peças em bom estado. 

---


## 1. Introdução

Este trabalho apresenta o projeto Re.use, uma plataforma digital desenvolvida para promover a economia circular no setor têxtil, oferecendo uma solução para facilitar a compra e doação de roupas usadas. A proposta visa não apenas reduzir o desperdício têxtil, mas também contribuir para uma mudança de comportamento no consumo de moda, com foco na sustentabilidade. 

### 1.1 Contextualização

A indústria da moda é uma das mais impactantes para o meio ambiente, contribuindo significativamente para o consumo excessivo de recursos naturais e o aumento dos resíduos têxteis. Nos últimos anos, com o aumento da conscientização ambiental e o crescimento do mercado de roupas de segunda mão, a economia circular tem ganhado destaque. Estudo realizado por Smith (2022) revela que a indústria têxtil é responsável por 10% das emissões globais de carbono, o que intensifica a necessidade de alternativas sustentáveis. Apesar disso, muitas pessoas ainda enfrentam desafios para se desfazer de roupas usadas de maneira eficiente, seja pela falta de plataformas acessíveis, pela falta de informações sobre como fazer as doações ou pela complexidade logística envolvida 

### 1.2 Problema

A indústria da moda é uma das maiores responsáveis pelo desperdício de recursos naturais e pela geração de resíduos têxteis. Com o consumo acelerado de roupas e a constante renovação de tendências, toneladas de peças são descartadas anualmente, muitas delas ainda em bom estado de uso. No entanto, mesmo com o crescimento da conscientização ambiental, muitas pessoas encontram dificuldades ao tentar dar um novo destino a essas roupas. A falta de informações acessíveis sobre onde e como doar, vender ou trocar peças usadas cria barreiras para aqueles que desejam evitar o descarte inadequado. Além disso, a ausência de uma estrutura eficiente para conectar quem quer se desfazer de roupas a quem pode reaproveitá-las contribui para que esses itens acabem em lixões e aterros sanitários. Como resultado, o desperdício têxtil continua aumentando, intensificando os impactos ambientais desse setor.

### 1.3 Objetivo geral

O objetivo principal deste trabalho é desenvolver uma plataforma digital que facilite o processo de compra e doação de roupas usadas, promovendo a economia circular no setor têxtil e contribuindo para a redução do desperdício de roupas em bom estado. 

#### 1.3.1 Objetivos específicos

1- Analisar os principais obstáculos enfrentados pelos usuários durante o processo de cadastro de roupas, com o objetivo de propor uma solução prática, rápida e intuitiva para facilitar a inserção de informações e imagens das peças na plataforma.

2- Investigar os critérios e preferências dos consumidores na hora de vender ou comprar roupas usadas diretamente entre usuários, a fim de estruturar uma experiência de venda mais eficiente, segura e personalizada. 

3- Estudar as melhores práticas de usabilidade em processos de cadastro de usuários em plataformas similares, visando desenvolver um fluxo de registro simples, acessível e que transmita confiança para novos participantes.

4-Explorar os desafios logísticos e operacionais relacionados à doação ou venda de roupas para brechós, com foco em criar um processo eficiente de triagem, coleta e redistribuição das peças, integrando essas funcionalidades na plataforma Re.use.

### 1.4 Justificativas

O projeto Re.use surge como resposta ao alto desperdício da indústria têxtil, que representa 10% das emissões globais de carbono e gera grandes volumes de resíduos, mesmo com peças em bom estado. Apesar do crescimento da moda sustentável, ainda há dificuldades para usuários doarem, venderem ou reaproveitarem roupas de forma prática e acessível.
A plataforma se justifica por integrar, de forma eficiente, os quatro principais processos: cadastro de usuário, cadastro de roupas, venda direta entre usuários e doação/venda para brechó, superando falhas de usabilidade, acesso e confiança presentes em soluções atuais.
Com isso, o Re.use contribui para a redução do desperdício têxtil, amplia o acesso à moda sustentável e incentiva práticas de consumo consciente, promovendo uma mudança real de comportamento no setor.

## 2. Participantes do processo

Os principais usuários do Re.use são: 

1- Consumidores: Indivíduos que desejam adquirir roupas de segunda mão ou fazer doações. Geralmente, possuem interesse por alternativas mais acessíveis e sustentáveis para o consumo de moda. 

2- Doadores: Pessoas ou instituições que desejam doar roupas usadas, procurando uma plataforma organizada e eficiente para a redistribuição das peças. 

3- Vendedor/Brechó: Organização que recebe as doações e redistribuem as roupas para vendas abaixo do valor, ampliando o incentivo aos consumidoresem a Reusarem. 

## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

Dificuldades na Venda de Roupas Usadas

A venda de roupas usadas enfrenta diversas dificuldades nos marketplaces convencionais. Muitas plataformas aceitam apenas produtos novos ou pouco usados, limitando as opções para quem deseja comercializar peças de segunda mão em bom estado. Além disso, as transações nesses espaços costumam ser desorganizadas e pouco seguras, já que dependem de interações diretas entre usuários, sem garantias de pagamento, entrega ou qualidade do produto.

Outro desafio é a incerteza sobre a real condição das peças, pois os compradores só conseguem avaliá-las após a entrega, o que pode gerar insatisfação. A precificação também é um obstáculo, pois a falta de um padrão claro dificulta a definição de preços justos, resultando em valores inconsistentes que podem afastar tanto vendedores quanto compradores.

Problemas no Processo de Doação

A doação de roupas enfrenta desafios que dificultam a destinação adequada das peças. Muitas pessoas querem doar, mas encontram dificuldades para localizar instituições ou indivíduos que realmente necessitam dos itens. Além disso, a falta de transparência no processo gera insegurança, pois não há garantia de que as roupas serão utilizadas de forma adequada ou direcionadas a quem mais precisa.

Outro obstáculo é o deslocamento necessário para realizar a doação. Ir até um ponto de coleta ou instituição pode ser inviável para quem tem grande volume de roupas ou enfrenta dificuldades de transporte, tornando o processo menos acessível e prático.

Problemas no Cadastro de Roupas e Usuários
O cadastro de roupas em plataformas de venda e doação apresenta desafios que impactam a experiência do usuário. Muitos sistemas não possuem um padrão para descrições, resultando em informações incompletas sobre medidas e estado real das peças, o que pode gerar dúvidas e insegurança para os compradores. Além disso, o processo de cadastramento é manual e pouco otimizado, exigindo que o usuário insira todas as informações sem suporte automatizado, tornando a experiência cansativa e desmotivadora.

Outro problema é a falta de integração com serviços de logística. Sem essa funcionalidade, compradores e vendedores precisam organizar a entrega por conta própria, o que torna o processo mais trabalhoso e pode dificultar a conclusão das transações.

Problemas no Cadastro de Usuários

O cadastro de usuários em muitas plataformas pode ser um processo demorado e pouco intuitivo. O preenchimento manual de informações como nome, telefone e endereço, sem opções de preenchimento automático ou integração com redes sociais, torna a experiência cansativa e pode desmotivar novos usuários. Além disso, a falta de verificação de identidade facilita a criação de perfis falsos e transações fraudulentas, comprometendo a segurança da comunidade.

Outro problema recorrente é a dificuldade na recuperação de contas. Muitos sistemas não oferecem métodos ágeis, como autenticação em duas etapas ou suporte eficiente, dificultando o acesso dos usuários em caso de esquecimento de senha. Além disso, a pouca transparência sobre a privacidade dos dados gera insegurança, pois os usuários não sabem como suas informações serão utilizadas, o que pode afastar potenciais compradores e vendedores.



### 3.2. Descrição geral da proposta de solução

Proposta Geral de Solução

Para enfrentar os desafios do desperdício têxtil e incentivar práticas sustentáveis no setor da moda, nossa plataforma funcionará como um ambiente virtual que facilita a compra, doação e venda de roupas usadas, promovendo a economia circular e reduzindo o impacto ambiental da indústria têxtil.

A solução será estruturada em quatro pilares principais, alinhados com os objetivos específicos do projeto:

1.1- Cadastro de Usuário Simples e Seguro

Cadastro instantâneo, onde o usuário pode acessar a plataforma imediatamente após fornecer seu nome, telefone e senha, sem necessidade de validação ou verificação.
Armazenamento seguro de dados, com todas as informações sendo protegidas por criptografia para garantir a segurança e confidencialidade.
Recuperação de conta facilitada, onde o usuário poderá redefinir sua senha diretamente na plataforma, caso necessário, sem a necessidade de processos adiciona

1.2- Cadastro Intuitivo e Eficiente de Peças

Upload de fotos e preenchimento guiado, garantindo que os usuários forneçam informações completas sobre as peças.
Categorias pré-definidas e descrição automatizada, sugerindo informações com base nas imagens enviadas.
Sistema de avaliação de qualidade, onde os usuários serão guiados para classificar a conservação do item com base em critérios padronizados.


1.3- Doação e Venda Segura

Diretrizes e filtros automáticos que impedem o cadastro de roupas danificadas ou inadequadas.
Sistema de reputação e avaliações, onde compradores e doadores poderão classificar suas experiências para criar um ambiente mais transparente.
Mecanismo de mediação de conflitos, permitindo que a plataforma atue em casos de desacordo entre usuários.


1.4- Venda Segura pela Plataforma

Pagamentos integrados, permitindo que os usuários efetuem transações diretamente na plataforma com diferentes métodos (cartão de crédito, Pix, boleto).
Logística integrada, conectando o usuário a serviços de envio, como Correios e transportadoras, para facilitar a entrega das peças.
Sistema de rastreamento de pedidos, permitindo que compradores e vendedores acompanhem a entrega dos produtos.


Conclusão

A implementação da plataforma Re.use busca democratizar o acesso à moda sustentável, tornando o processo de cadastro, compra, venda e doação de roupas mais prático, seguro e acessível. Combinando tecnologia, conscientização e facilidade de uso, espera-se reduzir significativamente o desperdício têxtil e fomentar uma cultura de consumo mais responsável e consciente.


### 3.3. Modelagem dos processos

[PROCESSO 1 - Venda/Doação para brechó ](processo-1-Venda-doação-para-brechó.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Cadastro de peças](processo-2-cadastro-de-peças.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Cadastro do usuário ](processo-3-Cadastro-do-usuário.md "Detalhamento do Processo 4.")

[PROCESSO 4 - venda para usuário](processo-4-Venda-para-Usuario.md "Detalhamento do Processo 4.") 

## 4. Projeto da solução

_O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas duas seções que descrevem, respectivamente: modelo relacional e tecnologias._

[Projeto da solução](solution-design.md "Detalhamento do projeto da solução: modelo relacional e tecnologias.")


## 5. Indicadores de desempenho

_O documento a seguir apresenta os indicadores de desempenho dos processos._

[Indicadores de desempenho dos processos](performance-indicators.md)


## 6. Interface do sistema

_A sessão a seguir apresenta a descrição do produto de software desenvolvido._ 

[Documentação da interface do sistema](interface.md)

## 7. Conclusão

_Apresente aqui a conclusão do seu trabalho. Deve ser apresentada aqui uma discussão dos resultados obtidos no trabalho, local em que se verifica as observações pessoais de cada aluno. Essa seção poderá também apresentar sugestões de novas linhas de estudo._

# REFERÊNCIAS

**[1.1]** - PARLAMENTO EUROPEU. **O impacto da produção e dos resíduos têxteis no ambiente**. 2020. Disponível em: https://www.europarl.europa.eu/topics/pt/article/20201208STO93327/o-impacto-da-producao-e-dos-residuos-texteis-no-ambiente. Acesso em: [12/02/2025].

**[1.2]** - DORBAÇÃO, Igor. **A falta de informações centralizadas e confiáveis para a doação e reaproveitamento de roupas usadas**. Universidade Federal do Estado do Rio de Janeiro, 2022. Disponível em: https://bsi.uniriotec.br/wp-content/uploads/sites/31/2022/04/202203IgorDorbacao.pdf. Acesso em: [12/02/2025].

**[1.3]** - DELTA MÁQUINAS TÊXTEIS. **O impacto da indústria da moda no meio ambiente**. 2022. Disponível em: https://deltamaquinastexteis.com.br/industria-da-moda. Acesso em: [12/02/2025].

**[1.4]** - ORGANIZAÇÃO DAS NAÇÕES UNIDAS MEIO AMBIENTE. **Indústria da moda é responsável por cerca de 10% das emissões de gases-estufa**. 2018. Disponível em: https://www.fiepr.org.br/boletins-setoriais/5/especial/industria-da-moda-e-responsavel-por-cerca-de-10-das-emissoes-de-gases-estufa-2-32021-395679.shtml. Acesso em: [13/02/2025].



# APÊNDICES


_Atualizar os links e adicionar novos links para que a estrutura do código esteja corretamente documentada._


## Apêndice A - Código fonte

[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back)  -- repositório do código do back-end


## Apêndice B - Apresentação final


[Slides da apresentação final](presentations/)


[Vídeo da apresentação final](video/)






