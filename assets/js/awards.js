document.addEventListener("DOMContentLoaded", function () {
  const previousWinnersLinks = document.querySelectorAll(".previous-winners a");

  previousWinnersLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const winnerYear = parseInt(this.textContent.match(/\d+/)[0]);
      updateWinner(winnerYear);
    });
  });
});

function updateWinner(year) {
  const winnerData = window.awardWinnersData.find((winner) => winner.year === year);
  if (winnerData) {
    const winnerContainer = document.querySelector(".winner-container");
    winnerContainer.innerHTML = `
      <div id="winner-picture">
        <img src="${window.imagePath}${winnerData.winner_photo}" alt="${winnerData.winner_name}">
      </div>
      <h3>${winnerData.winner_name} (${winnerData.year})</h3>
      <p>${winnerData.description}</p>
    `;
  }
}
