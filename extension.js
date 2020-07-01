const clientId = 'ptm1pmj69bfuceli46nae7bfhi7q8n';
const url = `https://api.twitch.tv/extensions/${clientId}/live_activated_channels`;
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Client-Id': clientId
    }
}

const logExt = document.getElementById("logExt");
logExt.onclick = async () => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log("This is the data we got in response: ", data);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Request done.");
    }
}

    
