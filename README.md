# 🧮 Calculadora Web

Uma calculadora web moderna e elegante desenvolvida com Next.js, React e Tailwind CSS. Interface inspirada na calculadora do iPhone com design glassmorphism e funcionalidades completas.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- 🎨 **Design Moderno**: Interface inspirada na calculadora do iPhone
- 🔍 **Glassmorphism**: Efeito de vidro fosco com transparência
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- 🎯 **Cores Intuitivas**: Paleta de cores bem definida para melhor UX
- ⚡ **Performance**: Desenvolvida com Next.js para máxima velocidade
- 🌐 **Redes Sociais**: Seção integrada com links para redes sociais
- 🔢 **Formatação Inteligente**: Resultados com até 2 casas decimais

## 🎨 Design

### Paleta de Cores
- **Números (0-9)**: Cinza claro para fácil leitura
- **Funções (C, ⌫)**: Verde para limpar, vermelho para apagar
- **Operações (÷, ×, −, +)**: Azul para operações matemáticas
- **Resultado (=)**: Laranja para destacar o botão de resultado

### Características Visuais
- Botões com bordas arredondadas moderadas
- Efeito de compressão ao clicar (`active:scale-95`)
- Transições suaves entre estados
- Background transparente com blur
- Sombra elegante para profundidade
- Ícone personalizado na aba do navegador

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.6** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **JavaScript ES6+** - Linguagem de programação moderna

## 📦 Instalação e Configuração

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (vem com o Node.js)
- [Git](https://git-scm.com/) (para clonar o repositório)

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/PedroCastanha-Dev/calculadora.git
cd calculadora
```

2. **Instale as dependências:**
```bash
npm install
```
> ⚠️ **Importante**: O arquivo `node_modules` não está incluído no repositório. Você DEVE executar este comando para instalar todas as dependências necessárias.

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse a aplicação:**
Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
# Desenvolvimento (com Turbopack para melhor performance)
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar linter
npm run lint
```

### Estrutura de Dependências

O projeto utiliza as seguintes dependências principais:
- **React 19.1.0** - Biblioteca para interfaces
- **Next.js 15.5.6** - Framework React
- **Tailwind CSS 4.0** - Framework CSS
- **ESLint** - Linter para qualidade do código

### ⚠️ Problemas Comuns e Soluções

**Erro: "Module not found" ou "Cannot resolve module"**
```bash
# Solução: Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

**Erro: "Port 3000 is already in use"**
```bash
# Solução: Use uma porta diferente
npm run dev -- -p 3001
```

**Erro: "Tailwind CSS not working"**
```bash
# Solução: Verifique se o Tailwind está instalado
npm install tailwindcss@^4
```

**Problemas de cache do Next.js**
```bash
# Solução: Limpe o cache
rm -rf .next
npm run dev
```

### 🚀 Primeira Execução

Após clonar o repositório, siga estes passos:

1. **Navegue até a pasta do projeto:**
```bash
cd calculadora
```

2. **Instale as dependências (OBRIGATÓRIO):**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

> 💡 **Dica**: Se você receber algum erro sobre módulos não encontrados, certifique-se de que executou o `npm install` primeiro!

## 🎮 Como Usar

### Operações Básicas
- **Números**: Clique nos botões 0-9 para inserir números
- **Operações**: Use ÷, ×, −, + para operações matemáticas
- **Resultado**: Clique em = para calcular o resultado
- **Limpar**: Use C para limpar tudo
- **Apagar**: Use ⌫ para apagar o último dígito
- **Decimal**: Use . para inserir números decimais

### Funcionalidades
- ✅ Operações básicas (adição, subtração, multiplicação, divisão)
- ✅ Números decimais com formatação inteligente
- ✅ Tratamento de erros (divisão por zero)
- ✅ Interface responsiva
- ✅ Animações suaves
- ✅ Feedback visual
- ✅ Formatação de resultados (máximo 2 casas decimais)

## 🏗️ Estrutura do Projeto

```
calculadora/
├── src/
│   └── app/
│       ├── componentes/
│       │   └── Calculadora.js    # Componente principal
│       ├── globals.css           # Estilos globais
│       ├── layout.js             # Layout da aplicação
│       └── page.js               # Página principal
├── public/
│   ├── background.png            # Imagem de fundo
│   └── phicon.ico                # Ícone da aplicação
├── package.json                  # Dependências do projeto
└── README.md                     # Este arquivo
```

## 🎯 Funcionalidades Implementadas

### Calculadora
- [x] Operações matemáticas básicas
- [x] Interface responsiva
- [x] Tratamento de erros
- [x] Números decimais
- [x] Formatação inteligente de resultados
- [x] Design moderno

### Interface
- [x] Efeito glassmorphism
- [x] Animações suaves
- [x] Cores intuitivas
- [x] Botões com feedback tátil
- [x] Layout responsivo
- [x] Ícone personalizado

### Redes Sociais
- [x] Links para Instagram
- [x] Links para GitHub
- [x] Links para LinkedIn
- [x] Links para Portfólio

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do código para o GitHub
2. Conecte seu repositório ao [Vercel](https://vercel.com)
3. Deploy automático em produção

### Outras Plataformas
- **Netlify**: Conecte o repositório GitHub
- **GitHub Pages**: Use GitHub Actions
- **Railway**: Deploy direto do GitHub

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Pedro Henrique Oliveira Castanha**
- 🌐 Portfólio: [pedrocastanha.com](https://pedrocastanha.com)
- 💼 LinkedIn: [Pedro Castanha](https://www.linkedin.com/in/pedro-henrique-oliveira-castanha-a5797b38b/)
- 📱 Instagram: [@pedrocastanha.dev](https://www.instagram.com/pedrocastanha.dev/)
- 🐙 GitHub: [@PedroCastanha-Dev](https://github.com/PedroCastanha-Dev)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org) pela excelente documentação
- [Tailwind CSS](https://tailwindcss.com) pelos estilos utilitários
- [React](https://reactjs.org) pela biblioteca incrível
- Comunidade open source por toda a inspiração

---

⭐ **Se este projeto te ajudou, não esqueça de dar uma estrela!** ⭐