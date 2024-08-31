//Nao achei o Json nem o xml disponivel na gupy, pedi para o chatGpt me gerar.

    let invoicing= [4500.50, 4100.00, 4300.75, null, null,
        5200.80, 5100.00, 4800.45, 4700.30, 4850.20, null, null,
        5300.90, 6900.60, 4750.40, 5200.30, 5100.50, null, null,
        5400.10,4900.75, 5300.65, 5150.30, null, null,
        4950.90, 5100.60, 5250.40, null, null];    
    
    let filteredInvoicing= invoicing.filter(f => f!=null)

    let sortedInvoicing= filteredInvoicing.sort((ant,atual)=>ant-atual)
    
    let avaregeInv= (filteredInvoicing.reduce((ant,atual)=>ant+atual,0))/filteredInvoicing.length

    let daysOverAvarage= (filteredInvoicing.filter(f=> f > avaregeInv)).length
    
    let minInvoicing= sortedInvoicing[0];

    let maxInvoicing = sortedInvoicing[sortedInvoicing.length-1]



    console.log(`faturamento minimo:R$ ${minInvoicing.toFixed(2)}\nfaturamento maximo: R$ ${maxInvoicing.toFixed(2)}\ndias com faturamento acima da media: ${daysOverAvarage}`)

  

  
  