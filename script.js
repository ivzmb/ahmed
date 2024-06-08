document.getElementById('showModalBtn').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('goToAccountBtn').onclick = function() {
    window.location.href = 'https://www.instagram.com/v_xjh?igsh=MzRlODBiNWFlZA==';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}