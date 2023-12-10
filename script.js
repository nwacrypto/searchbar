document.addEventListener("DOMContentLoaded", function () {
    let jsonData;

    // Fetch JSON data when the page is loaded
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            jsonData = data;

            // Add event listeners
            document.getElementById("searchButton").addEventListener("click", performSearch);
            document.getElementById("searchInput").addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    performSearch();
                }
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));

    function performSearch() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const searchResults = document.getElementById("search-results");
        searchResults.innerHTML = ""; // Clear previous results

        // Filter data based on the search term
        const filteredData = jsonData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );

        // Display results
        filteredData.forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add("result-item");
            listItem.innerHTML = `<strong>${item.title}</strong><br>${item.description}`;
            searchResults.appendChild(listItem);
        });
    }
});
