let medida = parseFloat(prompt("Qual a medida em metros?"));
let alternativa = prompt(
    "Escolha uma unidade de medida para converter:\n1-Milimetros(mm)\n2-Centímetro(cm)\n3-Decímetro(dm)\n4-Decâmetro(dam)\n5-Hectômetro(hm)\n6-Quilômetro(Km)"
);

let milimetros = medida * 1000;
let centimetro = medida * 100;
let decimetro = medida * 10;
let decametro = medida / 10;
let hectometro = medida / 100;
let quilometro = medida / 1000;

switch (alternativa) {
    case "1":
        alert(medida + " equivale a " + milimetros + " mm");
        break;
    case "2":
        alert(medida + " equivale a " + centimetro + " cm");
        break;
    case "3":
        alert(medida + " equivale a " + decimetro + " dm");
        break;
    case "4":
        alert(medida + " equivale a " + decametro + " dam");
        break;
    case "5":
        alert(medida + " equivale a " + hectometro + " hm");
        break;
    case "6":
        alert(medida + " equivale a " + quilometro + " km");
        break;
    default:
        alert("Opção invalida! Escolha um número entre as opções disponiveis.");
}
