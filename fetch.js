let accordion=document.querySelector('#accordion');

fetch('countries.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let contents=Object.keys(data);
    contents.forEach(function(content){
        let contentName=content.toUpperCase();
        let contentDiv=document.createElement('div');
        contentDiv.innerHTML=`<h2 class="text-success text-center">${contentName}</h2>`;
        accordion.appendChild(contentDiv);
        let continents=data[content];
        let continentList=document.createElement('ul');
        contentDiv.appendChild(continentList);
        continents.forEach(function(continent){
            let continentName=continent.name.toUpperCase();
            let continentLi=document.createElement('li');
            continentLi.innerHTML=`<li class="continent-line"><h3 class="text-success">${continentName}</h3></li>`;
            continentList.appendChild(continentLi);
            let countries=continent.countries;
            let countryList=document.createElement('ul');
            countryList.classList.add('countries-grid');
            continentLi.appendChild(countryList);
            countries.forEach(function(country){
                let countryName=country.name;
                let countryLi=document.createElement('li');
                countryLi.innerHTML=`<li><h4 class="text-white">${countryName}</h4></li>`;
                countryList.appendChild(countryLi);
                let languages=country.languages;
                let languageList=document.createElement('ul');
                countryLi.appendChild(languageList);
                languages.forEach(function(language){
                    let languageName=language.native;
                    let languageLi=document.createElement('li');
                    languageLi.innerHTML=`<li class="text-white">${languageName}</li>`;
                    languageList.appendChild(languageLi);
                });
            });
        });
    });
});