const wholesomememe = new Vue({
    el: '#wholesomememe',
    data: {
        wholesomememes: []
    },
    methods: {

    },
    created() {
        fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
        .then(response => response.json())
        .then(json => {
            this.wholesomememes = json
            console.log(this.wholesomememes)
        })
    }

});
