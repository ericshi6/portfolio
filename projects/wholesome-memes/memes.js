const wholesomememe = new Vue({
    el: '#wholesomememe',
    data: {
        wholesomememes: [],
    },
    methods: {
        greet: function (event) {
            // `this` inside methods point to the Vue instance
            alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            alert(event.target.tagName)
          },
        test: function(){
            console.log('test')
        },
        searchOneMeme: function() {
            fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
            .then(response => response.json())
            .then(json => {
                this.wholesomememes = json
                console.log(this.wholesomememes)
            })
        },
        searchTwoMemes: function() {
            fetch('https://meme-api.herokuapp.com/gimme/wholesomememes/2')
            .then(response => response.json())
            .then(json => {
                this.wholesomememes = json
                console.log(this.wholesomememes)
            })
        }
    },
    created() {
         fetch('https://meme-api.herokuapp.com/gimme/wholesomememes/2')
        .then(response => response.json())
        .then(json => {
            this.wholesomememes = json
            console.log(this.wholesomememes)
        }) 
    }

});

var vm = new Vue({
    el: '#example',
    data: {
      name: 'Vue.js'
    },
    // define methods under the `methods` object
    methods: {
      greet: function (event) {
        // `this` inside methods point to the Vue instance
        alert('Hello ' + this.name + '!')
        // `event` is the native DOM event
        alert(event.target.tagName)
      }
    }
  })
