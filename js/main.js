const team = [
    {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "img/wayne-barnett-founder-ceo.jpg"},
    {nome: "Angela Carol", ruolo: "Chief Editor", foto: "img/angela-caroll-chief-editor.jpg"},
    {nome: "Walter Gordon", ruolo: "Office Manager", foto: "img/walter-gordon-office-manager.jpg"},
    {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "img/angela-lopez-social-media-manager.jpg"},
    {nome: "Scott Estrada", ruolo: "Developer", foto: "img/scott-estrada-developer.jpg"},
    {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "img/barbara-ramos-graphic-designer.jpg"}
];
const teamHtml = document.getElementById("team")

for (let i = 0; i < team.length; i++) {
    const teamElement = team[i];
    console.log(teamElement);
    teamHtml.innerHTML += `<div class="card"> <h3>${teamElement.nome}</h3> <span>${ teamElement.ruolo}</span> <img src="${ teamElement.foto}" class="foto"> </div>`;
}
