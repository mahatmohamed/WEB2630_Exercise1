new Vue({
	el: '#exercise',
	data: {
		name: 'Mahat',
		age: 27,
		image: 'https://www.learningspy.co.uk/wp-content/uploads/2016/05/Testing_in_Progress.gif',
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
