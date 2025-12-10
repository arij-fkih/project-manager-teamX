console.log("ProjectManager demarre ....")
function creerProjet(nom,description){
    return{
        id:Date.now(),
        nom:nom,
        description:description,
        taches:[]
    };
}
//Exemple d'utilisation
const projetDemo=creerProjet("ProjetDémo","Projet de test pour ProjectManager");
console.log("Projet créé:",projectDemo);