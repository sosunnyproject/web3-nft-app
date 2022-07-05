import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'
import { useState, useEffect } from 'react';

export default function HeadNav() {
	let currentAccount = null;

	const detectProvider = async() => {
		setProvider(await detectEthereumProvider())
	
		if (provider) {
			console.log(provider === window.ethereum)
			// handle provider
		} else {
			// handle no provider
		}
		const ethereum = window.ethereum
		const isMetamask = ethereum.isMetaMask
		console.log(ethereum.networkVersion) // '1' if Ethereum Main Network (Mainnet)
		console.log(ethereum.selectedAddress) // returns null for now
		ethereum.on('connect', (connectInfo) => console.log(connectInfo)); // returns >>> chainId: "0x1" 
	
		ethereum
		.request({ method: 'eth_accounts' })
		.then(handleAccountsChanged)
		.catch((err) => {
			// Some unexpected error.
			// For backwards compatibility reasons, if no accounts are available,
			// eth_accounts will return an empty array.
			console.error(err);
		});
	}
	

	async function onClickHandler() {
		try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = await accounts[0];
      handleAccountsChanged(accounts)
      // showAccount.innerHTML = account;
      
      let list = await ethereum.request({ method: 'eth_accounts' });
      console.log("array: ", list)
      // accountList.innerHTML = list

    } catch (err) {
      if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
    }
	}
  

  function handleAccountsChanged(accounts) {
		if (accounts.length === 0) {
			console.log("length of account:" + accounts.length)
			// MetaMask is locked or the user has not connected any accounts
			console.log('no accounts found. Please connect to MetaMask.');
		} else if (accounts[0] !== currentAccount) {
			currentAccount = accounts[0];
			// Do any other work!
		}
	}

	const [provider, setProvider] = useState(null);

  useEffect(() => {
		if(!provider) {
			detectProvider();
		}

  }, []);

	return (
		<div className={styles.nav}>
			<Link href="/">
				<img src="/static/widtown-logo.svg"></img>
			</Link>
			<div className={styles.headerMenu_wrapper}>
				<div className={styles.headerMenu}>ARTISTS</div>
				<div className={styles.headerMenu}>WORKLOG</div>
				<Link href="/nft">
					<div className={styles.headerMenu}>NFT</div>
				</Link>

			</div>
			<button id={styles.user_icon} onClick={onClickHandler}>
				<img src="/static/user-logo.svg"></img>
			</button>
		</div>
	)
}