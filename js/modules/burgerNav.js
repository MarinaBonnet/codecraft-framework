//Exportation d'une fonction d'initialisation du menu burger

export function initBurgerNav() {
  // Récuperation de tout les bouttons burger de la page
  const burgers = document.querySelectorAll(".nav__burger-btn");

  // Pour chaque burger trouvé remeonte dans le DOM pour trouver le parent le plus proche ( permet d'avoir un menu independant si plusieurs
  burgers.forEach((burger) => {
    const nav = burger.closest(".nav");

    // Récupération du menu mobile associé au burger
    const mobileNav = nav.querySelector(".nav__mobile");

    // Ajout d'un événement de click sur le burger
    burger.addEventListener("click", () => {
      //Ajout de la classe is-open qui gére l'ouverture fermeture du menu
      mobileNav.classList.toggle("is-open");
      const isOpen = mobileNav.classList.contains("is-open");

      //Verification de l'état du menu pour accesibilité
      mobileNav.setAttribute("aria-hidden", !isOpen);
      burger.setAttribute("aria-expanded", isOpen);
    });
  });
}
