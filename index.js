const schedule = require('node-schedule');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

require('dotenv').config();
const ACCESS_KEY = process.env.ACCESS_KEY;

const sendMessage = async (message) => {
    const url = `https://api.whatsapp.com/send?phone=${process.env.WHATSAPP_NUMBER}&text=` + encodeURIComponent(message);
    await fetch(url);
};

const getExchangeRates = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const response = await fetch("https://api.currencylayer.com/convert?access_key=" + ACCESS_KEY + "&from=USD&to=BRL&amount=1", requestOptions);
    const data = await response.json();
    if (!data.quotes.USDBRL || !data.quotes.USDEUR) {
        throw new Error('Não foi possível obter a cotação do dólar e do euro.');
    }
    return {
        usd: data.quotes.USDBRL,
        eur: data.quotes.USDBRL / data.quotes.USDEUR
    };
};

const job = async () => {
    try {
        const exchangeRates = await getExchangeRates ();
        const message = `A cotação do dólar é ${exchangeRates.usd} reais por dólar e a cotação do euro é ${exchangeRates.eur} reais por euro.`;
        await sendMessage(message);
    } catch (error) {
        console.error(error);
    }
};

job();

schedule.scheduleJob('*/30 * * * *', job);