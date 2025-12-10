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

functionsupprimerProjet(listeProjets,idProjet){
    return listeProjets.filter(projet=>projet.id!==idProjet);
}
//Exemple d'utilisation
const nouvelleListe = supprimerProjet(projets,1);
console.log("Liste aprés suppresion :",nouvelleListe);
