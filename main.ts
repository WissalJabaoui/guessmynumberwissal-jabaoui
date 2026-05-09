game.splash("I'm thinking of a number between 1 and 6. Can you guess it?")
let secret_number = randint(1, 6)
let user_guess = game.askForNumber("what is your guess?")
if (secret_number == user_guess) {
    game.splash("you got it right! :)")
} else {
    game.splash("you it wrong. the number was: " + secret_number)
}
