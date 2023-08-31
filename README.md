<h1 align="center">
  <img src="./src/assets/svg/logo.svg" width="auto" height="200" alt="PharmaSol by Luís Felipe Ogawa"></img><br><br>
   PharmaSol
<br>
<br>

![GitHub last commit](https://img.shields.io/github/last-commit/lfogawa/medicationmanagement)

</h1>
<br>

## Summary
<br>

* [Built with](#built-with) | Construído com
* [Description](#description) | Descrição
* [Funcionalities](#funcionalities) | Funcionalidades
* [Improvements possibilities](#improvements-possibilities) | Possibilidades de melhoria
* [Video of the project](#video-of-the-project) | Vídeo do projeto
* [Access the project](#access-the-project) | Acesse o projeto
* [Run the project](#run-the-project) | Execute o projeto
* [Developers](#developers) | Desenvolvedores

<br>



<br>

## Built with

<br>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br>

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Description
<br>
<p>
  EN-US
</p>

<p align="justify">
  The "PharmaSol" system, short for "pharmacies solutions", was created with the objective of assisting pharmaceutical companies in the registration and management of pharmacies and medicines. The technologies used (React, NodeJS, StyledComponents and TypeScript) were intended to improve performance and facilitate customization and maintenance of the website.

  Within it, it's possible to perform user registration and respective login. Using "React Leaflet", it's capable of displaying registered pharmacies through a navigable map, as well as their details. Additionally, medicines appear in a list of cards that can be expanded for more information.

  For user usability, the buttons have certain characteristics that make the experience more realistic (with transforms, shadows and transitions). When the mouse hovers over the buttons, there's an animation to indicate that the button can be pressed. When clicked, there's also an animation to confirm the button press. Furthermore, the user receives temporary alerts when an action cannot be performed by clicking a button.

  The input areas have shadows and also change color when selected by the user, maintaining the color after content is written. When only numbers are accepted, the user won't be able to input letters.

  Navigation links are underlined and the cursor changes to a pointer when hovered over.

  The header is fixed at the top, making it easier to switch between pages, and it transforms into a compact menu when the screen size is reduced, as seen in smartphone access.

  The system is responsive to different device sizes.

  Lastly, for accessibility, the background color of the buttons and the font were approved according to the Web Content Accessibility Guidelines (WCAG), tested on the website: https://contrastchecker.com/
</p>

<br>

<p>
  PT-BR
</p>

<p align="justify">
  O sistema "PharmaSol", abreviação de "soluções para farmácias", foi criado com o objetivo de auxiliar empresas farmacêuticas no cadastro e gestão de farmácias e medicamentos. As tecnologias utilizadas (React, NodeJS, StyledComponents e TypeScript) tiveram como finalidade melhorar a perfomance e facilitar a personalização e a manutenção do site.
  
  Nele, é possível realizar o cadastro de usuários e o respectivo login. Utilizando o "React Leaflet", é capaz de mostrar as farmácias cadastradas por meio de um mapa navegável, assim como seus detalhes. Além disso, os medicamentos aparecem em uma lista de cartões que podem ser expandidos para mais informações.

  Para a usabilidade do usuário, os botões têm algumas características que tornam a experiência mais real (com transform, shadows e transitions). Quando o mouse passa sobre os botões, há uma animação para que o usuário saiba que ele pode ser pressionado. Quando clicado, também há uma animação para que o usuário saiba que clicou no botão. Ainda, o usuário recebe alertas temporários quando não é possível realizar uma ação ao clicar o botão.

  As áreas dos inputs possuem sombras permitindo também trocam de cor quando o usuário o seleciona e a mantém após escrever algum conteúdo. Quando são aceitos somente números, o usuário não conseguirá inserir letras.

  Os links de navegação aparecem sublinhados e o cursor muda para pointer ao passar o mouse sobre.

  O header é fixo ao topo, facilitando a troca de páginas, e é transformado em um menu compacto ao reduzir o tamanho da tela, como no acesso em smartphones.

  O sistema é responsivo a diferentes tamanhos de dispositivos.

  Por fim, para acessibilidade, a cor do fundo dos botões e a fonte foram aprovadas pelo Guia de Acessibilidade para Conteúdo da Web (WCAG), testadas no site: https://contrastchecker.com/
</p>

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Funcionalities

<br>

<p>
  EN-US
</p>

📌 User Registration Page.<br>
✔️ You can register an e-mail and password, with validation for a valid e-mail and a password of 8 or more characters containing both numbers and letters.<br>
✔️ You can return to the login page through a link.<br>
<br>

📌 Login Page, accepting only registered users.<br>
✔️ You can enter an e-mail and password, with validation for filled fields, a valid e-mail, and a password of 8 or more characters containing both numbers and letters.<br>
✔️ You can check if the user is already registered by e-mail and allow login if the password is correct through the "Login" button.<br>
✔️ You can navigate to the user registration page through a link.<br>
<br>

📌 Registered Pharmacies page with a navigable map, featuring colored markers and pop-ups for more details.<br>
✔️ If there are no registered pharmacies, the map will not appear, and the user will see a message.<br>
✔️ If there are registered pharmacies, the map will appear, and each pharmacy will have its own marker.<br>
✔️ You can navigate the map using the mouse.<br>
✔️ Clicking on a marker provides access to all information about the registered pharmacy (optional fields not filled will not appear).<br>
✔️ Initiate a conversation via WhatsApp with the pharmacy by clicking on the registered phone number link.<br>
<br>

📌 Pharmacy Registration Page.<br>
✔️ You can register various pharmacy information, with mandatory fields indicated by "*" and optional fields by "(optional)".<br>
✔️ If mandatory fields are not filled, the user will receive an alert to fill them in.<br>
✔️ If mandatory fields are filled correctly, the user will receive a success alert.<br>
<br>

📌 Registered Medicines page, with expandable cards for more details.<br>
✔️ You can view the image and name of each registered medicine and its laboratory in an expandable card.<br>
✔️ Clicking on the card expands it to display dosage, price, description (if available) and type of each registered medicine.<br>
<br>

📌 Medicine Registration Page.<br>
✔️ You can register various medicine information, with mandatory fields indicated by "*" and optional fields by "(optional)".<br>
✔️ If mandatory fields are not filled, the user will receive an alert to fill them in.<br>
✔️ If mandatory fields are filled correctly, the user will receive a success alert.<br>

📌 Header and Footer.<br>
✔️ It's possible to navigate between pages using links, with the header fixed to ease its usage, also transforming into a compact menu for smaller screens.<br>
<br>

📌 Buttons.<br>
✔️ Styled for usability (color changes, size, shadows) when hovered over or clicked.<br>
<br>

📌 Inputs.<br>
✔️ Styled for usability (color changes) when clicked in the fields and also after typing.<br>
<br>
<br>

<p>
  PT-BR
</p>

📌 Página de cadastro de usuário.<br>
✔️ É possível cadastrar e-mail e senha, sendo verificado se o e-mail é válido e se a senha possui 8 ou mais caracteres com números e letras.<br>
✔️ É possível retornar à página de login por meio de um link.<br>
<br>

📌 Página de login, aceitando somente usuários cadastrados.<br>
✔️ É possível inserir e-mail e senha, sendo verificado se os campos foram preenchidos, se o e-mail é válido e se a senha possui 8 ou mais caracteres com números e letras.<br>
✔️ É possível verificar se o usuário já é cadastrado, por meio do e-mail, e permitir o login, caso a senha esteja correta, por meio do botão "Login".<br>
✔️ É possível ir à página de cadastro de usuário por meio de um link.<br>
<br>

📌 Página de mapa navegável com as farmácias cadastradas, com marcadores coloridos e pop ups para mais detalhes.<br>
✔️ Caso não haja farmácias cadastradas, o mapa não aparecerá e o usuário verá uma mensagem.<br>
✔️ Caso haja farmácia cadastradas, o mapa aparecerá e cada farmácia terá seu próprio marcador.<br>
✔️ É possível navegar pelo mapa utilizando o mouse.<br>
✔️ É possível clicar no marcador para ter acesso à todas as informações da farmácia cadastrada (campos opcionais não preenchidos não aparecerão).<br>
✔️ É possível iniciar uma conversa pelo WhatsApp com a farmácia ao clicar no link do celular cadastrado.<br>
<br>

📌 Página de cadastro de farmácias.<br>
✔️ É possível cadastrar diversas informações de uma farmácia, sendo os campos obrigatórios indicados por "*" e os campos opcionais por "(optional)".<br>
✔️ Caso o usuário não preencha os campos obrigatórios, receberá um alerta de que deverá preenchê-los.<br>
✔️ Caso o usuário preencha os campos obrigatórios corretamente, receberá um alerta de sucesso.<br>
<br>

📌 Página de medicamentos cadastrados, com cartões expansíveis para mais detalhes.<br>
✔️ É possível visualizar, em um cartão expansível, a imagem e o nome do medicamento e do laboratório de cada medicamento cadastrado.<br>
✔️ É possível clicar no cartão, expandindo-o, fazendo com que apareça as informações de dosagem, preço, descrição (se houver) e tipo de cada medicamento cadastrado.<br>
<br>

📌 Página de cadastro de medicamentos.<br>
✔️ É possível cadastrar diversas informações de um medicamento, sendo os campos obrigatórios indicados por "*" e os campos opcionais por "(optional)".<br>
✔️ Caso o usuário não preencha os campos obrigatórios, receberá um alerta de que deverá preenchê-los.<br>
✔️ Caso o usuário preencha os campos obrigatórios corretamente, receberá um alerta de sucesso.<br>

📌 Cabeçalho e Rodapé.<br>
✔️ É possível navegar entre as páginas por meio de links, sendo o cabeçalho fixo para facilitar sua utilização, assim como transformado em um menu compacto para telas menores.<br>
<br>

📌 Botões.<br>
✔️ Possuem estilos que facilitam sua usabilidade (mudanças de cor, tamanho, sombras), ao passar o mouse ou clicá-los.<br>
<br>

📌 Inputs.<br>
✔️ Possuem estilos que facilitam sua usabilidade (mudanças de cor), ao clicar nos campos e também após digitar sobre eles.<br>
<br>
<br>


<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Improvements possibilities

<br>

<p>
  EN-US
</p>

🔨 Create a "forgot password" page.<br>
🔨 Create a form component to perform validation on mandatory fields, return temporary alerts if fields are not filled or if requirements for each field are not met (such as "@.com" for e-mail, password with more than 8 characters containing letters and numbers, etc.), and if the user/pharmacy/medication is already registered.<br>
🔨 Create a component that uses the Brazil API to automatically fill in address information based on the ZIP code.<br>
🔨 Improve the inputfield component so that all inputs are generated with a single tag, instead of creating multiple tags for each field.<br>
🔨 Improve the styled structure of pages and components, creating universal styles for reuse, as there are styled divs with similar structures.<br>
🔨 Improve alerts to appear at the top of the screen as sliding and temporary messages with colored backgrounds, making them more noticeable and user-friendly.<br>
🔨 Implement the functionality of user registration through their social media on the "user registration" page<br>
🔨 Implement search functionality on the "medicine list" page.<br>
🔨 Implement search functionality on the "pharmacy map" page, either using pharmacy information or searching for the nearest one based on the user's ZIP code.<br>
🔨 Implement the backend to store registration information (users, pharmacies, and medications) in a database OR enhance the use of the "useLocalStorage.ts" hook.<br>
🔨 Thoroughly review the code, ensuring alignment with best practices and addressing it. There's room for improvement in TypeScript usage, styled components, and programming logic.<br>
<br>

<p>
  PT-BR
</p>

🔨 Criar a página de "esqueci minha senha".<br>
🔨 Criar componente de formulário para realizar a verificação dos campos obrigatórios, retornar alertas temporários caso não haja o preenchimento ou o atendimento dos requisitos de cada campo (como "@.com" para o e-mail, senha com mais de 8 caracteres contendo letras e números, etc.) e se há usuário/farmácia/medicamento já cadastrado<br>
🔨 Criar componente que utilize o Brasil API para fazer o preenchimento automático das informações do endereço por meio do CEP<br>
🔨 Melhorar componente de inputfield para que todos os inputs sejam criados com uma única tag, ao invés de serem criados várias tags, cada uma para um campo<br>
🔨 Melhorar a estrutura styled das páginas e components, criando estilos universais para serem reutilizados, pois há divs styleds com estruturas similares<br>
🔨 Melhorar alertas para que apareçam no topo da tela, como mensagens deslizantes e temporárias com fundo colorido, facilitando a percepção e a visualização pelo usuário<br>
🔨 Implementar a funcionalidade de cadastro do usuário por meio de suas redes sociais na página "user registration"<br>
🔨 Implementar a funcionalidade de busca na página "medicine list"<br>
🔨 Implementar a funcionalidade de busca na página "pharmacy map", seja por meio das informações da farmácia ou buscando pela mais próxima, a partir do CEP do usuário<br>
🔨 Implementar o back-end para guardar as informações de cadastro (usuários, farmácias e medicamentos) em um banco de dados OU melhorar a utilização do hook "useLocalStorage.ts"<br>
🔨 Revisar profundamente o código, analisando se está de acordo com as boas práticas e corrigindo-o, há espaços para melhorias do uso do typescript, styled components e lógica de programação<br>
<br>

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Video of the project

<br>

* Video link: https://drive.google.com/file/d/1i_M9UdhBOSgmTry-hXudhM05v8a1zap5/view?usp=sharing

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Access the project

<br>

* Github link (private project): https://github.com/lfogawa/medicationmanagement

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Run the project

<br>

* Vercel link: https://medicationmanagement.vercel.app/
<br>
<br>

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>

<br>

## Developers

<br>

<div align="center">

| <img src="https://avatars.githubusercontent.com/u/94766274?s=400&u=6f60eb332344c8284ad28ed4e240522e4cc35e0e&v=4" width=115><br>Luís Felipe Ogawa|
| :---: |

Github: https://github.com/lfogawa <br>
LinkedIn: https://www.linkedin.com/in/lu%C3%ADs-felipe-ogawa/ <br>

</div>

<p align="right">(<a href="#summary">back to top | voltar ao topo</a>)</p>