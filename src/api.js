const apiKey = 'a84f477399f24333bb6d75d4a917bcfe';
const url = 'https://api.rebrandly.com/v1/links';

const shortenUrl = async (urlToShorten) => {
    const data = JSON.stringify({destination: urlToShorten});
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.shortUrl
        } else {
            return null;
        }
    } catch (err) {
        console.log(err)
    }
}

export default shortenUrl;