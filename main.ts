let random_number = randint(0, 6)
game.splash("pick a number from 0 to 6!")
game.splash(game.askForNumber("what is the number?"))
game.splash(random_number)
if (true) {
    game.splash("you got the right number :)")
} else if (false) {
    game.splash("you the wrong number :(")
}
