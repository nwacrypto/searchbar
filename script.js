document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Add event listener to the search input
            document.getElementById("searchInput").addEventListener("input", function () {
                const searchTerm = this.value.toLowerCase();
                const searchResults = document.getElementById("search-results");
                searchResults.innerHTML = ""; // Clear previous results

                // Filter data based on the search term
                const filteredData = data.filter(item =>
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
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
