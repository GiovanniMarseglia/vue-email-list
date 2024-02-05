


  const { createApp } = Vue

  createApp({
    data() {
      return {
        quantita:"",
        email:[],
      }
    },
    methods: {
      genera(){
        for(let i=0;i<this.quantita;i++){

          axios("https://flynn.boolean.careers/exercises/api/random/mail").then((report) => {
            this.email.push(report.data.response)
          })
         
        }
        console.log(this.email)
        
      }
    },
  }).mount('#app')
