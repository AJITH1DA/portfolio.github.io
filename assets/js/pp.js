<script>
    const ratingStars = document.querySelectorAll('.rating input');

    ratingStars.forEach(star => {
        star.addEventListener('change', function() {
            const rating = this.value;
            console.log(`Rated ${rating} stars.`);

            // You can add additional logic here, such as sending the rating to a server
            // Example:
            // fetch('/save-rating', {
            //     method: 'POST',
            //     body: JSON.stringify({ rating: rating }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }).then(response => {
            //     if (response.ok) {
            //         console.log('Rating saved successfully.');
            //     } else {
            //         console.error('Failed to save rating.');
            //     }
            // }).catch(error => {
            //     console.error('Error:', error);
            // });
        });
    });
</script>
