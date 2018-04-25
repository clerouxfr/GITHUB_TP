/* 
Activité : gestion des contacts
*/
var Contact = {
    // initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
           },
    
    //Déscription du contact
    decrire:function(){
       console.log("Nom: "+this.nom +", Prénom: " +this.prenom);
    },
   
};


var contacts=[];
var contactNom="";
var contactPrenom="";
var choix=1;

var contact1=Object.create(Contact);
contact1.init("Léssive","Carole");
contacts.push(contact1);

var contact2=Object.create(Contact);
contact2.init("Nélssone","Mélodie");
contacts.push(contact2);



while( choix !== 0){
    

    if(choix === 1 )
        {
            console.log("Voici la liste des Contacts:");
           
            for(var i=0;i<contacts.length;i++)
                {
           contacts[i].decrire()
                };
            
        }
     else if(choix === 2)
        {
            contactNom=prompt("Entrez le nom du nouveau contact");
            contactPrenom=prompt("Entez le prenom du nouveau contact");
    
            var contact=Object.create(Contact);
            contact.init(contactNom,contactPrenom);
            contacts.push(contact);
            console.log("\nle nouveau contact a été ajouté");
        };
    
   
    console.log("\n1 : Lister les contacts");
    console.log("2 : ajouter un contact");
    console.log("0 : Quitter");
    choix=Number(prompt("Choisisez une option"));
        
   
    
};
