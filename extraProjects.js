const mainProjects = new Vue ({
    el: '#main-projects',
    data: {
        projects: [
            {
                url: 'https://ericshi6.github.io/EricBobaBlog/',
                title: 'Boba Blog',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'A blog including my opinons on boba and a search feature to locate boba cafes based on location. Uses the Foursquare and OpenWeather API.',
                img: 'images/projects/boba.gif'
            },
            {
                url: 'https://ericshi6.github.io/giphy-pokedex/',
                title: 'Giphy Pokedex',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'Utilizes PokeAPI to display infomation about the current 898 Pokémon. Calls the Giphy API to present GIFs with each search.',
                img: 'images/projects/pikachu.gif'
            },
            {
                url: 'https://ericshi6.github.io/wholesome-memes/',
                title: 'r/WholesomeMemes Generator',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'A fun project using a public meme API to randomly generate wholesome memes from Reddit r/wholesomememes.',
                img: 'images/projects/wholesomememes.png'
            },
            {
                url: 'https://ericshi6.github.io/student-payments/',
                title: 'Student Payment Portal (Hosted Tokenization)',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'A payment page that uses NMI gateway Collect.js tokenization to accept credit cards online.',
                img: 'images/projects/studentPortal.png'
            }
        ]
    }
});


const extraProjects = new Vue({
    el: '#extra-projects',
    data: {
        projects: [
            {
                url: 'https://twitter.com/Rickbot12',
                title: 'Rick Astley Twitter Stanbot',
                technology: 'Node.js, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/rickbot.jpg'
            },
            {
                url: 'https://ericshi6.github.io/madlib-email-template',
                title: 'Mad Lib Emails',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/mermaid.gif'
            },
            {
                url: 'https://ericshi6.github.io/EricBobaBlog/',
                title: 'Boba Blog',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'A blog including my opinons on boba and a search feature to locate boba cafes based on location. Uses the Foursquare and OpenWeather API.',
                img: 'images/projects/boba.gif'
            },
            {
                url: 'https://ericshi6.github.io/giphy-pokedex/',
                title: 'Giphy Pokedex',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'Utilizes PokeAPI to display infomation about the current 898 Pokémon. Calls the Giphy API to present GIFs with each search.',
                img: 'images/projects/pikachu.gif'
            },
            {
                url: 'https://ericshi6.github.io/wholesome-memes/',
                title: 'r/WholesomeMemes Generator',
                technology: 'HTML, CSS, Javascript, Vue.js, REST',
                description: 'A fun project using a public meme API to randomly generate wholesome memes from Reddit r/wholesomememes.',
                img: 'images/projects/wholesomememes.png'
            },
            {
                url: 'https://ericshi6.github.io/student-payments/',
                title: 'Student Payment Portal (Hosted Tokenization)',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'A payment page that uses NMI gateway Collect.js tokenization to accept credit cards online.',
                img: 'images/projects/studentPortal.png'
            },
            {
                url: 'https://sfs-eshi.github.io/mySFS-API/',
                title: 'Interactive Gateway Documentation',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/mySFS.png'
            },
            {
                url: 'projects/weather/weatherApp.html',
                title: 'Interactive Gateway Documentation',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/weather4-3.png'
            },
            {
                url: 'projects/url-shorten/shorten.html',
                title: 'Url Shortener',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/rebrand.png'
            },
            {
                url: 'projects/church-donations/donations.html',
                title: 'Church Donations',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/church-donations4-3.png'
            },
            {
                url: 'projects/raffle-ticket/tickets.html',
                title: 'Raffle Tickets',
                technology: 'HTML, CSS, Javascript, REST',
                description: 'Additional project just for fun.',
                img: 'images/projects/raffle4-3.png'
            }


        ]
    }
});
