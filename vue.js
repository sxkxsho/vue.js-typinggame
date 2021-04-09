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
            'example1', //6問目追加
            'example2', //7問目追加
            'example3' //8問目追加
        ],
        typeBox: "",
        current_question_counts: 0,
        question_counts: 0
    },
    computed: {
        styleObjet: function() {
            width = 20 * this.current_question_counts + "%"
            if (this.current_question_counts == 5) {
                color = "#03a9f4"
            } else {
                color = "orange"
            }
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