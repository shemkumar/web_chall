const validUsername = 'root';
const validPassword = 'Helloworld';
const encodedFlag = 'cm9vdEBsb2NhbGhvc3R7VGhlX3dlYl9jaGFsbF9pc19lYXN5fQ=='; 

function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        const flag = atob(encodedFlag); // Decode Base64 encoded flag
        document.getElementById('flag').innerText = flag;
        document.getElementById('flag').style.display = 'block';
    } else {
        alert('Incorrect username or password!');
    }
}
