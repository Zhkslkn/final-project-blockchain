import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  connectWallet() {
    // async function connect(username) {
    //   if (window.ethereum) {
    //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    //     const address = accounts[0];
    //
    //     await fetch('/updateWalletAddress', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         username,
    //         address
    //       })
    //     });
    //   } else {
    //     console.log("No wallet");
    //   }
    // }
  }

}
