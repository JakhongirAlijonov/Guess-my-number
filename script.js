let highscore = 0;
let randomNum = Math.trunc(Math.random() * 20)
let scoreCount = 20;
$(".check").click(() => {
    if (randomNum == ($(".guess").val())) {
        $(".message").text(`Correct answer ✔️`);
        if (highscore < scoreCount) {
            highscore = scoreCount
            $(".highscore").text(highscore)
        }
        $(".number").text(randomNum)
        $("body").css("background-color", "#60b347")
        return
    } else if (randomNum > ($(".guess").val())) {
        $(".message").text(`Too low`);
        scoreCount -= 1
    } else if (randomNum < ($(".guess").val())) {
        $(".message").text(`Too high`);
        scoreCount -= 1
    }
    if (scoreCount <= 0) {
        alert(`You don't have any chance`)
    }
    $(".score").text(scoreCount)
})

function reset() {
    randomNum = Math.trunc(Math.random() * 20)
    $("body").css("background-color", "#222")
    $(".score").text(20)
    scoreCount = 20;
    $(".message").text(`Start guessing...`)
    $(".number").text(`?`)
    $(".guess").val('')
}
$(".again").click(() => {
    reset()

})