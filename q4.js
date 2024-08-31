/*
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
*/

let invoicingByStates={
    sp:67836.43,
    rj:36678.66,
    mg:29229.88,
    es:27165.48,
    outros:19849.53
}

let total= Object.values(invoicingByStates).reduce((ant,actual)=> ant+actual,0)

let dashboard=[]
 Object.keys(invoicingByStates).forEach((key)=>{
    let holder={}
    holder.name=key
    holder.value= invoicingByStates[key]
    holder.percentage= calcPercentage(invoicingByStates[key])
    dashboard.push(holder)
 })


 dashboard.forEach((state)=>{
    console.log(`${state.name}:\nFaturamento mensal: ${state.value}\nPorcentagem da representação: %${state.percentage}`)
 })
 function calcPercentage(value){
    return ((100*value)/total).toFixed(2)
 }