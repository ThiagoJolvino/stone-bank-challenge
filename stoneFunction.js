const list = [ 
    {
        item:"Pencil",
        amount: 20,
        price: 30
    },
    {
        item:"table",
        amount: 4,
        price: 100
    }
    ,{
        item:"notepad",
        amount: 10,
        price: 15
    },
    {
        item:"canvas",
        amount: 5,
        price: 5
    },
    {
        item:"keyboard",
        amount: 7,
        price: 12
    },
    {
        item:"cables",
        amount: 18,
        price: 10
    }]

const emails = ["thiagojolvino@gmail.com", "thiagojolvino@hotmail.com", "meajuda@stone.com.br", "euquero@stone.com.br"]; 

    function stoneFunction(list, emails){
        if(list.length == 0){
            return console.log("A lista de produtos se encontra vazia!");
            }else if(emails.length == 0){
            return console.log("A lista de emails se encontra vazia!");
        }else{ 
        var totalValue = 0;
       for(var i = 0; i < list.length; i++){
        var totalValue = totalValue + list[i].price * list[i].amount;
       }
       
       if(totalValue % emails.length > 0){
        const remainderDivision = totalValue % emails.length;
        const valueEachEmailsDecimals = totalValue / emails.length;
        const valueEachEmail = Math.trunc(valueEachEmailsDecimals);
        const lengthEmail = emails.length;
       for(var i = 0; i < emails.length; i++){
            emails[i] = emails[i] = [
                [emails[i], valueEachEmail]
            ];
       }
         emails[lengthEmail-1] = [
        [emails[lengthEmail-1][0][0], valueEachEmail + remainderDivision]
    ];
            return emails;
    }else{
        const valueEachEmail = totalValue / emails.length;
        for(var i = 0; i < emails.length; i++){
            emails[i] = emails[i] = [
                [emails[i], valueEachEmail]
            ];
        }
            }
            return emails;
        }
    } 
    console.log(stoneFunction(list, emails));   