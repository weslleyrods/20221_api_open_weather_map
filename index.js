require('dotenv').config()
const axios = require('axios')


// console.log(process.env.APP_KEY) 
// console.log(process.env.UNITS) 
// console.log(process.env.LANGUAGE) //porque lang pegaria a variavel lang da máquina, e não o idioma estabelido no env


// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL

const {PROTOCOL, BASE_URL, APPID, UNITS, CNT, Q, LANGUAGE} = process.env


const url = `${PROTOCOL}://${process.env.BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&lang=${LANGUAGE}&units=${UNITS}`
//console.log(url)

// const resultado = axios.get(url)
// console.log(resultado)

axios
    .get(url)
    .then(res => {
        //console.log(res)
        return res.data
    })
    .then(res =>{
        //console.log(resultado)
        return res[`list`]
    })
    .then(res =>{
        //console.log(res)
        //Desafio - exibir temperatura mínima, máxima e descrição de cada previsão
        //Plus - adicionei a data/hora também
        for(let previsao of res){
            const{temp_min, temp_max} = previsao.main
            const{description} = previsao.weather[0]

            console.log(`
            Temperatura máxima: ${temp_max}
            Temperatura mínima: ${temp_min}
            Descrição: ${description} 
            Data e hora da previsão: ${previsao.dt_txt}`)
            // console.log("Temperatura minima: "+temp_min)
            // console.log("Temperatura mmáxima: "+temp_max)
            // console.log("Descrição: "+description)
            // console.log("Data e hora da previsão: "+previsao.dt_txt)
        }        
    })


