alert(`====== Cardapio Digital, aperte "Ok" para continuar ======`)
 
alert(`Olá bem vindo ao cardapio digital
         aperte "OK" para continuar`)

let nome = prompt("Digite seu nome para regitro")

let estudante = prompt(`Voce é estudante? (sim/não)`)
    
let  prato1 = parseInt(prompt(`Menu:
   (1)Hanbúrguer- R$ 20
   (2)Pizza- R$ 35  
   (3)Refrigerante- R$ 5
   (4)Batatas fritas - R$ 12
   (5) Sair
   Escolha o seu primeiro prato! `))
    if (prato1 == 5) {
     alert("Obrigado pela visita !!")
    }
let  prato2 = parseInt(prompt(`Menu:
   (1)Hanbúrguer- R$ 20
   (2)Pizza- R$ 35  
   (3)Refrigerante- R$ 5
   (4)Batatas fritas - R$ 12
   (5) Sair
   Escolha o seu segundo prato! `))

   let  prato3 = parseInt(prompt(`Menu:
  (1)Hanbúrguer- R$ 20
   (2)Pizza- R$ 35  
   (3)Refrigerante- R$ 5
   (4)Batatas fritas - R$ 12
   (5) Sair
   Escolha o seu terceiro prato! `))

let precoItem1 = 0
switch(prato1) {
case 1:
    itemnome1 = "Hamburguer"
    precoItem1 = 20
    alert("Hamburguer- R$ 20  ")
    break
case 2:
    itemnome1 = "Pizza"
    precoItem1 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
    itemnome1 = "Refrigerante"
    preçoitem1 = 5
    alert("Refrigrante- R$ 5")
    break
case 4 :
    itemnome1 = "Batatas fritas"
    precoItem1 = 12
    alert("Batatas Fritas- R$ 12")
}
let precoItem2 = 0
switch(prato2) {
case 1: 
itemnome2 = "Hambuguer"
    precoItem2 = 20
    alert("Hamburguer- R$ 20  ")
    break
case 2:
    itemnome2 = "Pizza"
    precoItem2 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
    itemnome2 = "Refrigerante"
    precoItem2 = 5 
    alert("Refrigrante- R$ 5")
    break
case 4 :
    itemnome2 = "Batatas fritas"
    precoItem2 = 12
    alert("Batatas Fritas- R$ 12")
}
let precoItem3 = 0
switch(prato3) {
case 1:
    itemnome3 = "Hamburguer"
    precoItem3 = 20 
    alert("Hamburguer- R$ 20  ")
    break
case 2:
     itemnome3 = "Pizza"
    precoItem3 = 35
    alert("Pizza- R$ 35")
    break
case 3 :
     itemnome3 = "Refrigerante"
    precoItem3 = 5
    alert("Refrigerante- R$ 5")
    break
    case 4 :
    itemnome3 = "Batatas fritas"
    precoItem2 = 12
    alert("Batatas Fritas- R$ 12")
} 
 
let total = precoItem1 + precoItem2 + precoItem3

if (estudante == "sim" && total >= 50) {
alert(`Obrigado ${nome}
Pratos escolhidos:
${itemnome1} de R$${precoItem1}
${itemnome2} de R$${precoItem2}
${itemnome3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.15)}`)
} else if (estudante == "sim" && total <= 50) {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${itemnome1} de R$${precoItem1}
${itemnome2} de R$${precoItem2}
${itemnome3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.10)}`)
} else if (estudante == "não" && total >= 50) {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${itemnome1} de R$${precoItem1}
${itemnome2} de R$${precoItem2}
${itemnome3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total - (total * 0.05)}`)
} else {
    alert(`Obrigado ${nome}
Pratos escolhidos:
${itemnome1} de R$${precoItem1}
${itemnome2} de R$${precoItem2}
${itemnome3} de R$${precoItem3}
Total sem desconto: R$${total}
Total com desconto: R$${total}`)
}
