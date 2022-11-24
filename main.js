const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const link = document.querySelectorAll('.link');


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    links.classList.toggle('show-links');
    
});

link.forEach((linkItem)=> {
    linkItem.addEventListener('click', ()=> {
        hamburger.classList.remove('active');
        links.classList.remove('show-links');
        
    })
});

// DISPLAY PERFORMERS SECTION DYNAMICALLY
const performersData = [
    {
        img: './images/taita.jpeg',
        groupName: 'Coast Actors',
        groupTitle: 'Representatives of Coast Region in Cultural Performances',
        desc: `Coast Actors is one of the most popular and gifted group of men 
        actors in Kenya. The group has won several accolades for producing some 
        of the best cultural plays in the country.`
    },
    {
        img: './images/central.jpeg',
        groupName: 'Central drama group',
        groupTitle: 'Representatives of Central Region in Cultural Performances',
        desc: `Central drama group is known for its brilliant performances 
        in drama and cultural dances. Since making their debut in 2010, they have gained 
        massive recognition and continues to compete at national level.`  
    },
    {
        img: './images/eastern.jpeg',
        groupName: 'Eastern women drama group',
        groupTitle: 'Representatives of Eastern Region in Cultural Performances',
        desc: `Eastern women drama group is the total bomb. This group of actresses has 
        featured among the most talented actresses in Kenya for five years in a row. The Eastern 
        women drama group leaves its audience always wanting more because of their scintillating 
        performances.`  
    },
    {
        img: './images/kisii.jpeg',
        groupName: 'Nyanza drama starlets',
        groupTitle: 'Representatives of Nyanza Region in Cultural Performances',
        desc: `Nyanza drama starlets comprises of young and talented women. This group 
        is best known for its domination in the inter-county drama competitions. Majority 
        of the women in this group are also great dancers and have careers in modelling.`  
    },
    {
        img: './images/turkana.jpeg',
        groupName: 'The North drama group',
        groupTitle: 'Representatives of Northern Region in Cultural Performances',
        desc: `The North drama group comprises of enthusiastic men and women who began their 
        acting and dancing in 2010. They gained popularity in 2018 and have since become one 
        of the most loved group by the audience for their performances.`  
    },
    {
        img: './images/isiolo.jpeg',
        groupName: 'Western drama group',
        groupTitle: 'Representatives of Western Region in Cultural Performances',
        desc: `Western drama group is made up of talented men and women who made 
        their acting debut in the early 2000s. They have stayed dedicated to cultural performances 
        and they are always among the contenders for the top position in annual cultural festivals.`  
    }
];

const performers = document.querySelector('.performers');

window.addEventListener('DOMContentLoaded', ()=> {
    const performersString = performersData.map((article)=> {
        return `<article>
        <img src=${article.img} alt="Taita women drama group">
        <div class="group-info">
            <h3 class="group-name">${article.groupName}</h3>
            <p class="group-title">${article.groupTitle}</p>
            <p class="desc">
                ${article.desc}
            </p>
        </div>
    </article>`
    })
    .join('');
    performers.innerHTML = performersString;
})

const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();