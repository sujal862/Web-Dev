let deleteForms = document.querySelectorAll('form[method="post"]');  //bec you have multiple forms with method post to delete

deleteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let confirmation = confirm("Are you sure you want to delete this chat?");
        if (confirmation) {
            form.submit();
        }
    });
});