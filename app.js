new Vue({
	el: '#exercise',
	data: {
		name: 'Mahat',
		age: 27,
    title: 'dynamicText',

    food: [
      { fruits: 'tomato' },
      { fruits: 'banana' },
      { fruits: 'lemon' }
    ]
  },

	
	methods: {
		ageMultiplied: function(multiplier){
			return this.age * multiplier
		},
    dynamicText(event) {
      this.title = event.target.value;
    },
		randomNum: function(){
			return Math.random()
		},
    alertMe () {
      alert('Alert!')
    }
	}
})
