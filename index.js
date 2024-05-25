const TelegramBot = require('Sinal-Kwai-GOLDS-bot-api');

const TOKEN = '6186470105:AAFw9KZX5lOctPUnEHfcvDztHftnM7pzq5c';

const bot = new TelegramBot(TOKEN, { polling: true });

// ID do chat para onde a mensagem será enviada
const chatId = 'Kwaimeupovo'; // Substitua pelo ID do chat desejado

// Função para enviar uma mensagem
const sendMessage = () => {
  const message = 'https://kwai-video.com/f/sjBdi9Vn';

  bot.sendMessage(chatId, message)
    .then(() => {
      console.log('Mensagem enviada com sucesso');
    })
    .catch((error) => {
      console.error('Erro ao enviar mensagem:', error);
    });
};

// Configurar envio da mensagem a cada 1 minuto (60000 milissegundos)
setInterval(sendMessage, 60000);

bot.on('message', (msg) => {
  console.log('msg', msg);
});
