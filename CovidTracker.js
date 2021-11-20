let searchInput = document.getElementById('search');
let template = document.getElementById('template');
let country =document.getElementById('country')
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        covidTracker(searchText);
    }
})


async function covidTracker(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active} = JSON[635];
   

template.innerHTML =`
<article>
    <div>
      
       </div>
       <div>
       <p class="confirm">Positive: ${Confirmed}</p></div>
       <div>
       <p class="Deaths">Deaths: ${Deaths}</p></div>
       <div>
       <p class="Active">Active: ${Active}</p>
    </div>
</article>
`
country.innerHTML=` <h3 class="country">Country : ${Country} </h3>`

}