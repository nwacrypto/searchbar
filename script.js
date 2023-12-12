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

        // Find data with exact title match
        const resultItem = jsonData.find(item => item.title.toLowerCase() === searchTerm);

        // Display result or "Not found" message
        if (resultItem) {
            const listItem = document.createElement("li");
            listItem.classList.add("result-item");
            listItem.innerHTML = `<strong>${resultItem.title}</strong><br>${resultItem.description}`;
            searchResults.appendChild(listItem);
        } else {
            const notFoundItem = document.createElement("li");
            notFoundItem.innerHTML = "Not found";
            searchResults.appendChild(notFoundItem);
        }
    }
});
