document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signupForm').addEventListener('submit', (event) => {
        // event.preventDefault();
        const profilePhotoInput = document.getElementById('profilePicture')
        const formData = new FormData();
        formData.append('file', profilePhotoInput.files[0]);
        const xhr = new XMLHttpRequest();
        if (xhr.upload && profilePhotoInput.files && profilePhotoInput.files.length > 0) {
            xhr.upload.onprogress = function(e) {
                let done = e.position || e.loaded,
                    total = e.totalSize || e.total;
                console.log('xhr.upload progress: ' + done + ' / ' + total + ' = ' + (Math.floor(done / total * 1000) / 10) + '%');
            };
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    // window.location = '/users/admin';
                }
            }
            xhr.open('POST', '/users/upload-photo/' + event.target.id.value, true);
            xhr.send(formData);
        }
    })
})