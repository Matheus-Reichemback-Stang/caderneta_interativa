function calculo(){
    let numero = document.getElementById('numero')
    let res = document.getElementById('seltab')

    if(numero.value.lenght == 0){
        alert('[ERRO] DIGITE UM NÚMERO!')
    }else{
        let n = Number(numero.value)
        let c= 1
        res.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
    numero.value = ''
    numero.focus()
}