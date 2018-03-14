
    function getJson(url, methed) {
        var promise = new Promise((resolve, reject) => {
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open(methed, url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        })
        promise.then(
            (value) => { console.log(value,'zhe is date') },
            (value) => { console.log('error: ' + value,'error') })
    }
export default getJson;