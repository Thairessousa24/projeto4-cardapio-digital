alert(`====== Cardapio Digital, aperte "Ok" para continuar ======`)

let prato1 = parseInt(prompt(`====== Cardapio: ======
    (1) Hamburguer R$20
    (2) Pizza R$35
    (3) Refrigerante R$5
    (4) Batata Frita R$12
    
    Escolha seu primeiro prato! `))

    if(prato1 == 5) {
       alert("Programa encerado!")
     } let prato2 = parseInt(prompt(`====== Cardapio: ======
    (1) Hamburguer R$20
    (2) Pizza R$35
    (3) Refrigerante R$5
    (4) Batata Frita R$12
     
    Escolha seu segundo prato! `))
         {
       
     } let prato3 = parseInt(prompt(`====== Cardapio: ======
    (1) Hamburguer R$20
    (2) Pizza R$35
    (3) Refrigerante R$5
    (4) Batata Frita R$12
    
    Escolha seu terceiro prato! `))
     {
       
     }

  
     if(prato1 == 5) {
       alert("Programa encerado!")
     }
    let precoItem1 = 0
switch (prato1) {
    case 1:
        precoItem1 = 20
         alert("Hamburguer R$20") 
         break
    case 2: 
    item1 = "pizza"
    precoItem1 = 35
         alert("Pizza R$35")
         break
    case 3:
     item1 = "refrigerante"
     precoItem1 = 5
         alert("Refrigerante R$5")
         break
    case 4:
     item1 = "Batata Frita"
     precoItem1 = 12
        alert("Batata Frita R$12")
        break
   case 5 :
        (prato1 == 5)
        alert("Programa encerado!")
        break 

        }

     
    let precoItem2 = 0
switch (prato2) {
    case 1:
     item2 = "hamburguer"
     precoItem1 = 20
         alert("Hamburguer R$20") 
         break
    case 2: 
    item2 = "pizza"
    precoItem1 = 35
         alert("Pizza R$35")
         break
    case 3:
     item2 = "refrigerante"
     precoItem1 = 5
         alert("Refrigerante R$5")
         break
    case 4:
     item2 = "Batata Frita"
     precoItem1 = 12
        alert("Batata Frita R$12")
        break
    case 5 :
        (prato2 == 5)
        alert("Programa encerado!")
}    


if(prato3 == 5) {
       alert("Programa encerado!")
     }
    let precoItem3 = 0
switch (prato3) {
    case 1:
    item3 =  hamburguer
     precoItem1 = 20 
         alert("Hamburguer R$20") 
         break
    case 2: 
    item3 = pizza
    precoItem1 = 35
         alert("Pizza R$35")
         break
    case 3:
     item3 = "refrigerante"
    precoItem1 = 5
         alert("Refrigerante R$5")
         break
    case 4:
     item3 = "Batata Frita"
    precoItem1 = 12
        alert("Batata Frita R$12")
        break
    case 5 :
        (prato3 == 5)
        alert("Programa encerado!")
}
let total = precoItem1 + precoItem2 + precoItem3

if (estudante == "sim" && total >= 50) {
alert(`Obrigado ${nome}
Pratos escolhidos:
${item1} de R$${precoItem1}
${item2} de R$${precoItem2}
${item3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.15)}`)
} else if (estudante == "sim" && total <= 50) {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${item1} de R$${precoItem1}
${item2} de R$${precoItem2}
${item3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.10)}`)
} else if (estudante == "não" && total >= 50) {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${item1} de R$${precoItem1}
${item2} de R$${precoItem2}
${item3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.05)}`)
} else {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${item1} de R$${precoItem1}
${item2} de R$${precoItem2}
${item3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total}`)
}

