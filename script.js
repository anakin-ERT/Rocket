// Sélection des éléments HTML
const form = document.getElementById('donation-form');
const tableBody = document.querySelector('#donation-table tbody');
const rocket = document.querySelector('.rocket');
const progressText = document.getElementById('progress-text');

// Variables pour suivre le montant total
let totalAmount = 0;
const goal = 200000; // Objectif de financement

// Écouteur d'événement sur le formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs des champs du formulaire
  const name = document.getElementById('name').value;
  const amount = parseInt(document.getElementById('amount').value);
  const company = document.getElementById('company').value;

  // Vérifie que le montant est valide
  if (isNaN(amount) || amount <= 0) {
    alert('Veuillez entrer un montant valide.');
    return;
  }

  // Met à jour le montant total
  totalAmount += amount;

  // Ajoute une ligne au tableau
  const row = document.createElement('tr');
  row.innerHTML = `<td>${name}</td><td>${amount} CHF</td><td>${company}</td>`;
  tableBody.appendChild(row);

  // Met à jour la barre de progression et la fusée
  updateProgress();

  // Réinitialise le formulaire
  form.reset();
});

// Fonction pour mettre à jour la barre de progression
function updateProgress() {
  // Calcule le pourcentage atteint
  const progressPercentage = Math.min((totalAmount / goal) * 100, 100);

  // Met à jour la position de la fusée
  rocket.style.left = `${progressPercentage}%`;

  // Met à jour le texte de progression
  progressText.textContent = `${totalAmount.toLocaleString()} CHF sur ${goal.toLocaleString()} CHF`;

  // Affiche une alerte si l'objectif est atteint
  if (totalAmount >= goal) {
    alert('Félicitations ! L’objectif de financement a été atteint ! 🚀');
  }
}