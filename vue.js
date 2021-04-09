new Vue({
    el: "#app",
    data: {
        startFlg: "",
        current_question: "",
        questions: [
            'apple',
            'banana',
            'chocolate',
            'donut',
            'espresso',
            'example1',
            'example2',
            'example3'
        ],
        typeBox: "",
        current_question_counts: 0,
        question_counts: 0,
        i: 0
    },
    computed: {
        styleObjet: function() {
            width_value = 100 / (this.questions.length + this.i)
            width = width_value * this.current_question_counts + "%"
            if (this.current_question_counts == this.questions.length + this.i) {
                color = "#03a9f4"
            } else {
                color = "orange"
            }
            this.i++
                console.log(this.i)
            console.log(width_value)
            return {
                'width': width,
                'background-color': color
            }
        }
    },
    methods: {
        gameStart: function() {
            this.startFlg = true;
            this.$nextTick(function() {
                document.getElementById('typeFrom').focus()
            })
        }
    },
    mounted: function() {
        this.current_question = this.questions[0]
        this.question_counts = this.questions.length
    },
    watch: {
        typeBox: function(e) {
            if (e == this.current_question) {
                this.questions.splice(0, 1)
                this.current_question = this.questions[0]
                this.typeBox = ""
                this.current_question_counts = this.current_question_counts + 1
            }
        }
    }
})