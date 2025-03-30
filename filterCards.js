const filterLinks = document.querySelectorAll(".latest-works ul li a");
const cards = document.querySelectorAll(".latest-works-img div");

document.addEventListener("DOMContentLoaded", function () {

    function applyFilter(filter) {
        cards.forEach(card => {
            const categories = card.getAttribute("data-category").split(" ");
            card.style.display = (filter === "all" || categories.includes(filter)) ? "block" : "none";
        });

        filterLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(`[data-filter="${filter}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        localStorage.setItem("selectedFilter", filter);
    }

    const savedFilter = localStorage.getItem("selectedFilter") || "all";
    applyFilter(savedFilter);

    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            applyFilter(this.getAttribute("data-filter"));
        });
    });
});
