document.getElementById('editForm').addEventListener('submit', function (event) {
    var form = event.target;
    var isValid = true;

    // Clear previous validation messages
    Array.from(form.querySelectorAll('.form-control')).forEach(input => {
        input.classList.remove('is-invalid');
    });

    // Full Name Validation
    if (!form.fullName.value.trim()) {
        form.fullName.classList.add('is-invalid');
        isValid = false;
    }

    // Email Validation
    if (!form.email.value.trim() || !/\S+@\S+\.\S+/.test(form.email.value)) {
        form.email.classList.add('is-invalid');
        isValid = false;
    }

    // Position Validation
    if (!form.position.value.trim()) {
        form.position.classList.add('is-invalid');
        isValid = false;
    }

    // Company Validation
    if (!form.company.value.trim()) {
        form.company.classList.add('is-invalid');
        isValid = false;
    }

    // Phone Validation
    if (!form.phone.value.trim() || !/^\d{10}$/.test(form.phone.value)) {
        form.phone.classList.add('is-invalid');
        isValid = false;
    }

    // Mobile Validation
    if (!form.mobile.value.trim() || !/^(\(\d{3}\)\s?\d{3}-\d{4})$/.test(form.mobile.value)) {
        form.mobile.classList.add('is-invalid');
        isValid = false;
    }

    // Address Validation
    if (!form.address.value.trim()) {
        form.address.classList.add('is-invalid');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if invalid
    }
});






