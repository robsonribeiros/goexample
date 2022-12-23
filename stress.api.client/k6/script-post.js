import http from 'k6/http';
import { sleep } from 'k6';

const headers = { 'Content-Type': 'application/json' };
const jsonPost = [{ "createdAt": "2022-11-04T19:10:17.305Z", "name": "BillyStoltenberg", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1164.jpg", "id": "1" }, { "createdAt": "2022-11-05T09:01:38.207Z", "name": "JodiKertzmann", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/502.jpg", "id": "2" }, { "createdAt": "2022-11-05T15:36:31.390Z", "name": "AngelKuhlmanIV", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/75.jpg", "id": "3" }, { "createdAt": "2022-11-04T19:23:42.344Z", "name": "KellyNolan", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg", "id": "4" }, { "createdAt": "2022-11-05T06:33:55.777Z", "name": "JeremySchneider", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg", "id": "5" }, { "createdAt": "2022-11-05T07:29:47.957Z", "name": "EvanDuBuque", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/99.jpg", "id": "6" }, { "createdAt": "2022-12-01T10:43:35.133Z", "name": "DeloresDoyle", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg", "id": "7" }, { "createdAt": "2022-12-01T22:53:22.031Z", "name": "Ms.JeremyBruen", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg", "id": "8" }, { "createdAt": "2022-12-02T00:59:05.444Z", "name": "JoannRitchie", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg", "id": "9" }, { "createdAt": "2022-12-01T21:37:21.680Z", "name": "Mrs.StevenCummerata", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/771.jpg", "id": "10" }, { "createdAt": "2022-12-02T09:01:39.388Z", "name": "HattiePfeffer", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1005.jpg", "id": "11" }, { "createdAt": "2022-12-01T10:11:38.831Z", "name": "EdithMacejkovic", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg", "id": "12" }, { "createdAt": "2022-12-02T08:34:12.087Z", "name": "BettyBlock", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/216.jpg", "id": "13" }, { "createdAt": "2022-12-02T06:56:11.901Z", "name": "ArmandoBecker", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg", "id": "14" }, { "createdAt": "2022-12-01T17:22:36.489Z", "name": "MargueriteWilliamson", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg", "id": "15" }, { "createdAt": "2022-12-02T02:59:48.845Z", "name": "LorenePaucek", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg", "id": "16" }, { "createdAt": "2022-12-01T22:23:37.039Z", "name": "TonyaHeidenreich", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg", "id": "17" }, { "createdAt": "2022-12-01T15:55:35.929Z", "name": "MissAntoniaReynolds", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg", "id": "18" }, { "createdAt": "2022-12-01T14:15:27.068Z", "name": "Ms.GlendaSchimmel", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/145.jpg", "id": "19" }, { "createdAt": "2022-12-01T17:29:53.880Z", "name": "JodySchadenDDS", "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg", "id": "20" }]

export const options = {
    insecureSkipTLSVerify: true,
    //tlsCipherSuites: ['TLS_RSA_WITH_RC4_128_SHA', 'TLS_RSA_WITH_AES_128_GCM_SHA256'],
    // tlsVersion: {
    //     min: 'ssl3.0',
    //     max: 'tls1.2',
    // },
    // tlsAuth: [{
    //     domains: ['localhost', 'example.com'],
    //     cert: open('./server.pem'),
    //     key: open('./server-key.pem'),
    //     cA: open('./ca-key.pem'),
    // }, ],
};

export default function() {
    // console.log("versao http2");
    // sleep(1);
    let res = http.post(`http://localhost:8080/v1/client/post`, {
        headers: headers,
        body: JSON.stringify(jsonPost),
        //http2: true,
    });
    // console.log(res.status);
}