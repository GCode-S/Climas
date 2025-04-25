# 🌤️ Climas

Aplicativo de clima desenvolvido com **React Native** usando **Expo**, que mostra as condições do tempo em tempo real com base na cidade informada.

## 🚀 Tecnologias

- ⚛️ React Native + Expo
- 🌐 OpenWeatherMap API
- 🎨 Feather Icons (`@expo/vector-icons`)
- 📦 Axios para requisições HTTP

## 📲 Funcionalidades

- 🔍 Busca de clima atual por nome da cidade
- 🌡️ Exibição da temperatura em Celsius
- 🌤️ Descrição das condições climáticas (ex: nublado, céu limpo, chuva)
- 🎯 Ícones dinâmicos com base na condição do tempo
- 🌈 Gradiente de fundo (opcional) representando a atmosfera

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/climas.git
cd climas
```

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Configure sua chave da API no ambiente:

Se estiver usando `app.config.js` ou `Constants.manifest.extra`, adicione sua chave da API do OpenWeatherMap:

```js
extra: {
  API_KEY: 'sua_chave_aqui'
}
```

4. Execute o app:

```bash
npx expo start
```

## 🧠 Lógica do ícone climático

O app usa um objeto para mapear os estados climáticos retornados da API para ícones Feather:

```js
const estados = {
  Clear: 'sun',
  Clouds: 'cloud',
  Rain: 'cloud-rain',
  Drizzle: 'cloud-drizzle',
  Thunderstorm: 'cloud-lightning',
  Snow: 'cloud-snow',
  Mist: 'wind',
  Smoke: 'wind',
  Haze: 'wind',
  Dust: 'wind',
  Fog: 'wind',
  Sand: 'wind',
  Ash: 'wind',
  Squall: 'wind',
  Tornado: 'wind',
};
```

O ícone muda automaticamente com base em `weather[0].main`.

## 🧪 Exemplo de chamada para a API

```js
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q={cidade desejada},BR&appid=${API_KEY}&units=metric&lang=pt_br`
);
```

## 📄 Licença

Esse projeto está sob a licença **MIT**.  
Sinta-se à vontade para usar, modificar e compartilhar!

---

Desenvolvido com 💙 por [Gabriel S.](https://github.com/seu-usuario)
