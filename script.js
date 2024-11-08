document.getElementById('btn2019').addEventListener('click', ()=>{
    const cod = 'desculpa'
    if(document.getElementById('senha').value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    } else if(getElementById('btn2019').value == ''){
        alert('Preencha os dados solicitados')
    } else{
        alert('Senha incorreta')
    }
})