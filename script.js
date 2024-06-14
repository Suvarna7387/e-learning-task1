$(document).ready(function() {
    // Adding new contact field
    $('.add-contact').on('click', function() {
        var newContact = $('<div class="input-group mb-2">' +
            '<input type="tel" class="form-control additional-contact" placeholder="Contact Number" required>' +
            '<div class="input-group-append">' +
            '<button type="button" class="btn btn-outline-danger remove-contact">Remove</button>' +
            '</div>' +
            '</div>');
        $('#contact-container').append(newContact);
    });

    // Removing contact field
    $(document).on('click', '.remove-contact', function() {
        $(this).closest('.input-group').remove();
    });

    // File input
    $('#resume').on('change', function() {
        var file = this.files[0];
        var fileInfo = $('#file-info');
        var fileError = $('#file-error');

        if (file) {
            var fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
            if (fileSizeMB > 5) {
                fileInfo.hide();
                fileError.show();
                this.value = '';
            } else {
                fileError.hide();
                fileInfo.text(`File name: ${file.name}, File size: ${fileSizeMB} MB`);
                fileInfo.show();
            }
        } else {
            fileInfo.hide();
            fileError.hide();
        }
    });

    // Form submission
    $('#user-form').on('submit', function(event) {
        event.preventDefault();

        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        var passwordError = $('#password-error');

        if (password !== confirmPassword) {
            passwordError.show();
            return;
        } else {
            passwordError.hide();
        }

        $('#confirm-message').show();
    });

    $('#confirm-yes').on('click', function() {
        $('#confirm-message').hide();
        $('#thank-you-message').show();
        setTimeout(function() {
            $('#thank-you-message').hide();
            $('#user-form')[0].reset();
            $('#file-info').hide();
            $('#file-error').hide();
            // Remove all dynamically added contact fields
            $('#contact-container').find('.input-group').not(':first').remove();
        }, 3000);
    });

    $('#confirm-no').on('click', function() {
        $('#confirm-message').hide();
    });
});


// JavaScript

// document.addEventListener('DOMContentLoaded', function() {
//     // Adding new contact field
//     document.querySelector('.add-contact').addEventListener('click', function() {
//         var contactContainer = document.getElementById('contact-container');
//         var newContact = document.createElement('div');
//         newContact.classList.add('input-group', 'mb-2');
//         newContact.innerHTML = `
//             <input type="tel" class="form-control additional-contact" placeholder="Contact Number" required>
//             <div class="input-group-append">
//                 <button type="button" class="btn btn-outline-danger remove-contact">Remove</button>
//             </div>`;
//         contactContainer.appendChild(newContact);
//     });

//     // Removing contact field
//     document.addEventListener('click', function(event) {
//         if (event.target.classList.contains('remove-contact')) {
//             event.target.closest('.input-group').remove();
//         }
//     });

//     // File input
//     document.getElementById('resume').addEventListener('change', function() {
//         var file = this.files[0];
//         var fileInfo = document.getElementById('file-info');
//         var fileError = document.getElementById('file-error');

//         if (file) {
//             var fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
//             if (fileSizeMB > 5) {
//                 fileInfo.style.display = 'none';
//                 fileError.style.display = 'block';
//                 this.value = ''; 
//             } else {
//                 fileError.style.display = 'none';
//                 fileInfo.textContent = `File name: ${file.name}, File size: ${fileSizeMB} MB`;
//                 fileInfo.style.display = 'block';
//             }
//         } else {
//             fileInfo.style.display = 'none';
//             fileError.style.display = 'none';
//         }
//     });

//     // Form submission
//     document.getElementById('user-form').addEventListener('submit', function(event) {
//         event.preventDefault();

//         var password = document.getElementById('password').value;
//         var confirmPassword = document.getElementById('confirm-password').value;
//         var passwordError = document.getElementById('password-error');

//         if (password !== confirmPassword) {
//             passwordError.style.display = 'block';
//             return;
//         } else {
//             passwordError.style.display = 'none';
//         }

//         document.getElementById('confirm-message').style.display = 'block';
//     });

//     document.getElementById('confirm-yes').addEventListener('click', function() {
//         document.getElementById('confirm-message').style.display = 'none';
//         document.getElementById('thank-you-message').style.display = 'block';
//         setTimeout(function() {
//             document.getElementById('thank-you-message').style.display = 'none';
//             document.getElementById('user-form').reset();
//             document.getElementById('file-info').style.display = 'none';
//             document.getElementById('file-error').style.display = 'none';
//         }, 3000);
//     });

//     document.getElementById('confirm-no').addEventListener('click', function() {
//         document.getElementById('confirm-message').style.display = 'none';
//     });
// });