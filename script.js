//js for adding data

        // Inline JSON data
        const jsonData = [
            { "title": "UGB-SampleTitle1", "description": "Sample description 1" },
            { "title": "UGB-SampleTitle2", "description": "Sample description 2" },
            // Add more entries as needed
        ];

        document.addEventListener("DOMContentLoaded", function () {
            generateTitle();
        });

        function generateRandomString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }

            return result;
        }

        function generateTitle() {
            const prefix = 'UGB';
            const randomString = generateRandomString(7);
            const generatedTitle = `${prefix}-${randomString}`;
            document.getElementById('title').value = generatedTitle;
        }

        function addData() {
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;

            if (title && description) {
                // Append new data to jsonData array
                const newData = { "title": title, "description": description };
                jsonData.push(newData);

                // Encrypt jsonData and update the HTML content
                const updatedDataEncrypted = JSON.stringify(jsonData)
                    .split('')
                    .map(char => char + '/u/')
                    .join('');

                document.write(updatedDataEncrypted);
            } else {
                alert('Please generate a title and provide a description.');
            }
        }
  



// js for fetching data
 document.addEventListener("DOMContentLoaded", function () {
            // Add event listeners
            document.getElementById("searchButton").addEventListener("click", performSearch);
            document.getElementById("searchInput").addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    performSearch();
                }
            });
        });

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
