document.getElementById("summarizeButton").addEventListener("click", function() {
            const link = document.getElementById("podcastLink").value.trim();
            if (!link) {
                alert("Please enter a valid Spotify or YouTube link.");
                return;
            }
            document.getElementById("summaryOutput").classList.remove("hidden");
            document.getElementById("summaryText").textContent = "Fetching summary... Please wait.";
            
            setTimeout(() => {
                document.getElementById("summaryText").textContent = "Oops! That didn't Work."; //don't mind haha.
            }, 12000);
        });