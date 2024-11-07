document.getElementById('btn2019').addEventListener('click', ()=>{
    const cod = 44
    if(document.getElementById('senha').value == cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    } else if(getElementById('btn2019').value == ''){
        alert('Preencha os dados solicitados')
    } else{
        alert('Senha incorreta')
    }
})