const { createApp } = Vue

  createApp({
      data() {
        return {
          emails: [],
		  newEmails: []
        }

    },
	methods: {
		creaNuovo () {
			this.newEmails = this.emails
		}
	},
    mounted () {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                        this.emails[i] = response.data.response
                        }
                );
        }
		setInterval(this.creaNuovo, 500)
		
    }
    
}).mount('#app')