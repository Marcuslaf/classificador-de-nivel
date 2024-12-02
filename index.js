// Definindo variáveis para o nome do herói e sua experiência
let heroName = "Marcus";
let heroXP = 10500;

// Estrutura de decisão para classificar o nível do herói
let heroLevel;

if (heroXP < 1000) {
    heroLevel = "Ferro";
} else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Prata";
} else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = "Ouro";
} else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platina";
} else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendente";
} else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Imortal";
} else {
    heroLevel = "Radiante";
}

// Mensagem de saída
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
