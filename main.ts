// The data
function peopleInfo (name: string, yearOfBirth: number, children: number, country: string, knowsHowToProgram: boolean) {
    return {
        name,
        yearOfBirth,
        children,
        country,
        knowsHowToProgram
    }
}
const personOne = peopleInfo("Oralle Klimus", 2000, 0, "Honduras", true)
const personTwo = peopleInfo("Natalee Ksandra", 1974, 0, "Chinda", true)
const personThree = peopleInfo("Saloma Gourlay", 1971, 2, "China", false)
const personFour = peopleInfo("Lothaire Blurton", 1984, 2, "Czech Republic", false)
const personFive = peopleInfo("Roderich Poynzer", 1996, 2, "Saint Lucia", false)
//
// Is the first person older than the last person?
if (personOne.yearOfBirth < personFive.yearOfBirth) {
    console.log("Yes, the first person is older")
} else console.log("No, the first person is not older")
//
// Does the 2nd person have the same amount of kids as the 3rd?
if (personTwo.children === personThree.children) {
    console.log("Yes they have the same amount of children")
} else console.log("No, they don't have the same amount of children")
//
// Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”
if ((personOne.knowsHowToProgram = true) && (personFour.knowsHowToProgram = true)) {
    console.log("Yay!")
} else console.log("LMGTFY")
//
/* Create a statement that checks the 2nd person in the array for their nationality.
If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”)
If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task */
let country: string = personTwo.country
switch(country) {
    case "Iceland":
        console.log("Hæ")
        break
    case "Spain":
        console.log("Hola")
        break
    case "Korea":
        console.log("여보세요")
        break
    default:
        console.log("Hello")
}
//
// Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
const theName = personTwo.name
function longerThanFive(name: string) {
    console.log (name.length > 5 ? "Yes, it's longer than 5 characters" : "No, it's not longer than 5 characters")
}
longerThanFive(theName)