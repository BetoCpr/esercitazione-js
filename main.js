async function prova() {
    const resp = await fetch('https://api.covid19api.com/summary');
    const data = await resp.json();

    const tot = data.Global.TotalConfirmed
    const totalC = document.getElementById("TotC")

    totalC.textContent = tot;

    console.log(data)


    
}
prova()


