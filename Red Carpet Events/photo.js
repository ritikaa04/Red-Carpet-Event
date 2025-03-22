document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const modalImages = document.getElementById("modalImages");
    const modalTitle = document.getElementById("modalTitle");

    function openModal(category) {
        const images = {
            event: ["et1.png", "et2.jpg", "et3.jpg", "et4.webp", "et5.jpg", "et6.webp", "et7.jpg", "et8.jpg", "et9.webp"],
            wedding: ["w1.jpeg", "w2.webp", "w3.webp", "w4.webp", "w5.jpg", "w6.webp", "w7.jpg", "w8.webp", "w9.cms"],
            seminar: ["se1.jpg", "se2.jpeg", "se3.jpg", "se4.jpg", "se5.avif", "se6.jpg", "se7.webp", "se8.jpg", "se9.jpg"],
            conference: ["co1.jpeg", "co2.jpg", "co3.jpg", "co4.jpg", "co5.jpg", "co6.jpg", "co7.jpg", "co8.jpg", "co9.jpg"]
        };

        modalTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        modalImages.innerHTML = images[category].map(img => `<img src="${img}" alt="${category} Image">`).join("");
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    window.openModal = openModal;
    window.closeModal = closeModal;
});
