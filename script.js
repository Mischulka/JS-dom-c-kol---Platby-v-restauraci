// Načtení section v HTML
const section = document.querySelector(".result");

// Načtení vstupů od uživatele
const Amount = parseInt(prompt("Zadejte částku k úhradě v Kč"));
const tipPercentage = parseInt(prompt("Zadejte spropitné v %"));
const numberOfPeople = parseInt(prompt("Zadejte počet lidí"));

// Výpočet celkové částky včetně spropitného
const totalAmount = Amount * (tipPercentage / 100);
const totalWithTip = Amount + totalAmount;

// Výpočet částky na osobu
const amountPerPerson = totalWithTip / numberOfPeople;

// Vytvoření a vložení výsledků do HTML
const newParagraph = document.createElement("p");
newParagraph.textContent = `Celková částka s ${tipPercentage}% spropitným je ${totalWithTip} Kč.`;
section.append(newParagraph);

const newParagraph2 = document.createElement("p2");
newParagraph2.textContent = `Každý z ${numberOfPeople} lidí zaplatí ${amountPerPerson} Kč.`;
section.append(newParagraph2);

// // Vytvoření nového odstavce, jeho naplnění a přidání do stránky
// const newParagraph = document.createElement("p")
// newParagraph.textContent = "Jeden člověk zaplatí " + result + " Kč"
// section.append(newParagraph)
