$(document).ready(function(){
  $('.signin-form').submit(function(e){
    e.preventDefault(); // Empêche le formulaire de se soumettre normalement
    
    // Récupère les données du formulaire
    var formData = $(this).serialize();

    console.log(formData);
    
    // Envoie les données du formulaire à un script PHP côté serveur
    // $.ajax({
    //   type: 'POST',
    //   url: 'traitement.php', // URL du script PHP de traitement
    //   data: formData,
    //   success: function(response){
    //     // Affiche la réponse du serveur (par exemple, un message de confirmation)
    //     console.log(response);
    //     alert('Message envoyé avec succès !');
    //   },
    //   error: function(xhr, status, error){
    //     // Gère les erreurs éventuelles lors de la requête AJAX
    //     console.error(xhr.responseText);
    //     alert('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
    //   }
    // });
  });
});