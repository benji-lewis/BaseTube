document.getElementById('searchButton').addEventListener('click', function() {
	let query = document.getElementById('searchBar').value;
	let base64Query = btoa(query); // Convert to base64
	let searchUrl = `https://www.youtube.com/results?search_query=${base64Query}`;
	window.open(searchUrl, '_blank');
});