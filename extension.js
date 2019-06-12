const clientId = 'ptm1pmj69bfuceli46nae7bfhi7q8n';

const logExt = () => {
    const getURL = `https://api.twitch.tv/extensions/${clientId}/live_activated_channels`;
    const header = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Client-Id': clientId
        }
    }
    fetch(getURL, header)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));

}
