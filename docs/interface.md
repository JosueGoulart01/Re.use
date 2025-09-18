
# 6. Interface do sistema

_Visão geral da interação do usuário por meio das telas do sistema. Apresente as principais interfaces da plataforma._

# 6.1. Tela principal do sistema

_Descrição da tela principal do sistema._

Tela principal do sistema


# 6.2. Telas do processo 1 : Cadastro de usuário 


## login na Conta
_O formulário é dividido em duas abas, "Login" e "Cadastre-se". Na aba "Login", o usuário encontra campos para inserir seu Email e Senha, o campo  senha é  acompanhado de um ícone que permite visualizar o texto digitado. Logo abaixo, um link para "Recuperar senha" oferece uma opção para usuários que esqueceram suas credenciais. A ação principal é realizada através do botão "Entrar". Onde, após o preenchimento, o sistema verifica a existência do usuário._

Tela da atividade: login na Conta

![Captura de tela 2025-06-02 183300](https://github.com/user-attachments/assets/f465c258-d586-42fd-864c-337ab87146fa)



## Preencher termos de compromisso
_Apresentada aos novos usuários após indicarem que não possuem conta, esta tela é intitulada "Termos de Compromisso". Ela detalha as condições de uso da plataforma através de um texto, organizado em seções numeradas que cobrem o Objeto, Aceitação, Regras de Uso, Responsabilidades, Privacidade e Dados, Penalidades e Disposições Finais. O usuário deve ler para, implicitamente, concordar e prosseguir com o cadastro._

Tela da atividade: Preencher termos de compromisso
![Captura de tela 2025-06-02 183342](https://github.com/user-attachments/assets/033bbae3-b6d8-4816-adf3-9438ce6d6b76)



## Cadastrar usuário 
_Destinada ao registro de novos usuários que já aceitaram os termos, esta tela mantém a estrutura visual com as abas "Login" e "Cadastre-se", com a segunda opção selecionada. O formulário de cadastro solicita diversas informações pessoais, como Email, Nome completo, CPF e Data de Nascimento. Além disso, são requisitados os campos para Senha e Confirmação de Senha. Mais abaixo, uma seção denominada "Escolha o método de pagamento" oferece as opções "Chave Pix" e "Cartão", indicando a necessidade de configurar uma forma de transação. Bem-sucedida concluiria o processo de registro para o novo usuário._

Tela da atividade : Cadastrar usuário
![Captura de tela 2025-06-02 185634](https://github.com/user-attachments/assets/dcd7dc1a-fa5e-4a25-aa43-27657a211d70)



## Consultar usuário
_Um ícone de usuário verificado é posicionado abaixo do menu. A área principal é dedicada às "Informações pessoais", apresentando campos como Email, Nome, CPF e Data de Nascimento, além de um campo para Telefone.  Um pequeno ícone de lápis no canto da tela sugere a possibilidade de edição dessas informações._

Tela da atividade : Consultar usuário
![Captura de tela 2025-06-02 183610](https://github.com/user-attachments/assets/529d26bd-b550-49be-8b5c-c42d47b42f4d)



## Editar perfil
_Sendo a continuação da visualização do perfil do usuário, esta parte da tela foca na seção "Endereço". São apresentados campos para CEP, Endereço, Número da residência, Complemento (opcional), Bairro, Cidade e Estado. Na parte inferior, destacam-se dois botões de ação principais: "Excluir usuário", acompanhado de um ícone de lixeira, e "Sair da conta", com um ícone de saída. Esta tela complementa a tarefa "Consultar usuário" e serve como ponto de partida para ações como editar o perfil, excluir a conta (levando à "Opção excluir") ou encerrar a sessão ("opção fechar")._

Tela da atividade : Editar perfil
![Captura de tela 2025-06-02 183618](https://github.com/user-attachments/assets/6b2b123d-5b7e-49b5-905d-81c9bf64b8d1)



## Excluir perfil
_Sobreposta à tela de perfil do usuário, que permanece visível ao fundo, esta tela apresenta um pop-up modal de confirmação. Ele surge quando o usuário seleciona a opção de excluir seu perfil. O modal exibe um ícone de alerta, seguido pelo título "Tem certeza?" e a mensagem explicativa "Essa ação não poderá ser desfeita!". Para prosseguir ou desistir da exclusão, são oferecidos dois botões distintos: "Sim, excluir", em destaque verde, e "Cancelar", em vermelho. Este pop-up é um componente da tarefa "Excluir Perfil" no BPMN, acionada pela "Opção excluir", e a escolha do usuário determinará se o processo de exclusão é finalizado ou interrompido._

Tela da atividade : Excluir perfil
![Captura de tela 2025-06-02 183644](https://github.com/user-attachments/assets/a6fec9d9-f66a-4a6c-a92d-c1b40ac28df6)



# 6.3. Telas do processo 2 : Consultar roupas cadastradas


## Consultar roupas cadastradas
_Esta tela apresenta a lista de roupas cadastradas pelo usuário, servindo como painel central para gerenciamento. No topo, um menu de navegação horizontal oferece acesso a "Home", "Adicionar Peça", "Carrinho" e "Perfil", com "Adicionar Peça" aparentemente sendo a seção ativa ou de origem para esta visualização de itens. Abaixo do menu, uma barra de filtros permite ao usuário buscar por "Nome da peça" e selecionar "Categoria", "Tamanho", "Conservação" e "Cor", com um botão "Buscar" para aplicar os filtros. A área principal exibe os itens de vestuário em cards individuais, mostrando uma imagem da peça, seu nome, categoria, tamanho, conservação e cor; alguns itens possuem um status como "Peça vendida" ou "Peça doada". Cada card de item possui um ícone de lixeira para exclusão. Notavelmente, um item "Calça da Nike" na parte inferior exibe ícones adicionais que sugerem opções de metodo de venda (doar ou vender) e editar a peça. Um botão flutuante com um ícone de "+" no canto inferior direito indica a funcionalidade para adicionar uma nova peça. Esta tela é onde o usuário pode iniciar as operações de "escolher peça que vai ser removida", "escolher peça a ser editada" ou navegar para o cadastro de uma nova peça._

Tela da atividade: Consultar roupas cadastradas
![Captura de tela 2025-06-02 204633](https://github.com/user-attachments/assets/d80647e9-c07e-43f0-b441-5c131f3fe47a)



## Preencher as informações da roupa
_Esta tela é dedicada ao cadastro de uma nova peça de roupa, acessada provavelmente através do botão "+" da tela de consulta ou da opção "Adicionar Peça" no menu. Sob o cabeçalho padrão da aplicação, um formulário centralizado solicita as informações do item. No topo do formulário, um espaço demarcado com um ícone de "+" sugere uma área para upload da foto da peça. Abaixo, seguem-se os campos para "Título", menus dropdown para "Selecione a categoria", "Selecione o tamanho", "Conservação" e "Cor", e um campo de texto para "Descrição". Um botão "Confirmar" na parte inferior submete os dados para registro._

Tela da atividade: Preencher as informações da roupa
![Captura de tela 2025-06-02 203936](https://github.com/user-attachments/assets/f53828ba-3ab0-4b92-97cb-f79b3d5b4a01)



## Confirmar cadastro da peça 
_Sobrepondo-se à tela de cadastro de peça, esta tela exibe um pop-up de confirmação de sucesso. O pop-up apresenta um ícone de visto  em verde, indicando êxito na operação. A mensagem principal é "Peça cadastrada!", complementada pelo texto "Sua peça foi registrada com sucesso." Um botão "OK" permite ao usuário fechar o pop-up e, retornar à tela de consulta de roupas ou continuar navegando._

Tela da atividade : Confirmar cadastro da peça
![Captura de tela 2025-06-02 204609](https://github.com/user-attachments/assets/14f69ded-0e28-4839-8483-abe35b13e80a)



##  Preencher os campos a serem editados
_Esta tela apresenta um formulário para edição dos dados de uma peça de roupa existente, acessada após selecionar uma peça na tela de consulta e optar por editá-la. O layout é similar ao formulário de cadastro, com uma área para a imagem da peça no topo e campos para suas informações. Na imagem, os campos estão preenchidos com dados da "Calça da Nike", incluindo Categoria "Calça", Tamanho "42", Conservação "Novo", Cor "Preto" e uma descrição "aleatoria". Um botão "Confirmar" na parte inferior permite salvar as alterações. Um detalhe novo desta tela de edição é a presença de um botão "Excluir peça" com um ícone de lixeira, localizado no canto superior direito da área do formulário, oferecendo uma opção de remoção direta do item que está sendo editado._

Tela da atividade :  Preencher os campos a serem editados
![Captura de tela 2025-06-02 204852](https://github.com/user-attachments/assets/f9678c14-a810-4ff4-91a9-801c111280ec)



## Confirmar remoção
_Sobreposta ao formulário de edição de uma peça, esta tela exibe um pop-up que confirma o sucesso da atualização dos dados do item. O pop-up apresenta um ícone de visto dentro de um círculo verde, simbolizando a conclusão bem-sucedida da operação. A mensagem principal exibida é "Peça atualizada!", seguida pelo texto de suporte "As informações foram salvas com sucesso.". Um botão "OK" permite ao usuário fechar o pop-up, retornando à tela de visualização da peça atualizada ou à lista de roupas._

Tela da atividade : Confirmar remoção
![Captura de tela 2025-06-02 211155](https://github.com/user-attachments/assets/cf2113a5-07cc-49e8-906e-143f1d9a91f8)



## Confirmar remoção
_Exibida como um pop-up sobre a tela de listagem de roupas, esta tela serve para confirmar a intenção do usuário de excluir uma peça. O pop-up é acionado após o usuário clicar no ícone de lixeira de um item específico. Ele apresenta um ícone de alerta, o título "Excluir peça?" e a advertência "Essa ação não pode ser desfeita.". Para prosseguir, o usuário tem as opções "Sim, excluir", destacado em verde, e "Cancelar", em vermelho. Esta etapa de confirmação é crucial, garantindo que a exclusão não seja acidental._

Tela da atividade : Confirmar remoção
![Captura de tela 2025-06-02 204700](https://github.com/user-attachments/assets/cc2109b8-f4f8-4bfa-b347-a033a615bcb0)


# 6.4. Telas do processo 3 : Venda/Doação


# Cadastrar Peça

Esta tela permite ao usuário adicionar uma nova peça de roupa ao sistema. Ela está organizada em um formulário centralizado, com design clean e intuitivo, facilitando a inserção das informações necessárias para o cadastro.

Upload de Imagem: Na parte superior, há um campo destinado ao upload da foto da peça, com um espaço destacado que exibe um ícone de adição (+). O usuário pode clicar para selecionar ou arrastar uma imagem, que será exibida nesse espaço para visualização prévia.

Campos de Texto e Seleção: Abaixo do upload, o formulário contém campos para preenchimento do título da peça e seletores para categoria, tamanho, condição de conservação e cor. Cada campo possui um texto placeholder que indica a informação requerida, auxiliando o usuário na correta inserção dos dados.

Descrição: Um campo de texto multilinha para o usuário inserir uma descrição detalhada da peça, fornecendo informações adicionais relevantes.

Botão de Confirmação: Na parte inferior do formulário, um botão verde escuro com texto em branco “Confirmar” permite que o usuário finalize o cadastro da peça após preencher todos os dados.

Tela da atividade : Cadastrar Peça
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3687100-brecho-re-use/blob/main/docs/images/processo%203/processo3.1.jpeg)


# Confirmar cadastro da peça

Após o usuário preencher o formulário de cadastro de peça e clicar no botão "Confirmar", um pop-up aparece sobre a tela, indicando o sucesso da operação.

Visual e Conteúdo: O pop-up apresenta um ícone de confirmação (check verde) no topo, transmitindo visualmente que a ação foi concluída com êxito.

Mensagem: A mensagem principal exibe o texto "Peça cadastrada!" em destaque, seguido por uma descrição complementar "Sua peça foi registrada com sucesso.", reforçando para o usuário que o processo foi finalizado corretamente.

Botão de Fechamento: Há um botão "OK" em verde escuro que permite ao usuário fechar o pop-up e retornar à tela principal do cadastro ou à listagem de peças.

Experiência do Usuário: Essa confirmação é importante para garantir que o usuário receba feedback claro e imediato sobre o sucesso do cadastro, aumentando a confiança no sistema e prevenindo dúvidas ou ações repetidas.

Tela da atividade : Confirma cadastro da peça
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3687100-brecho-re-use/blob/main/docs/images/processo%203/processo3.2.jpeg)




