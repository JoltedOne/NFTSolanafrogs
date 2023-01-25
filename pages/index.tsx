import type { NextPage } from "next";
import contractAddresses from "../const/contractAddresses";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
import { useWallet } from "@solana/wallet-adapter-react";
import { WrongListingTypeError } from "@thirdweb-dev/sdk";
import ClaimedSupply from './claimedSupply';
import frogbg from "../images/Frogbg.png";
import genera from "../images/Generate.jpg";


// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function NFTDrop() {
  const wallet = useWallet();
  const { program } = useProgram(contractAddresses[1].address, "nft-drop");
  const claim = useClaimNFT(program);


  return (
    <div className={styles.container}>
      <div className={styles.collectionContainer}>
        <div className={styles.detailPageContainer}>
          <h1>
          <Image 
            src= {frogbg}
            alt={"Example NFT Image"}
             width={350}
            height={300}
        />
          </h1>

         
            <div className={styles.lightYellow}>
            <h2>
          Discover the secret world of frogs and find the mimics among them!
          </h2></div>
           <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
          <p>
            <a
              className={styles.lightGreen}
              href="https://JoltedDesigns.com"
            >
             <b> Check out the Izsapo Collection!
            </b></a>
          </p>
        </div>
        <img
          src={'https://i.imgur.com/7ZfSXV3.jpg'}
          alt={"Example NFT Image"}
          width={300}
          height={300}
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            marginLeft: "20px",
            marginRight: "0px",
          }}
        />
        {wallet.connected ? (
          <button
            className={styles.bttnstyles}
            onClick={() =>
              claim.mutate(
                { amount: 1 },
                {
                  onError: (error) => {
                    console.error(error);
                    alert(
                      "Mint Begins 1/25/23 at 10:00 AM EST"
                    );
                  },
                }
              )
            }
          >
            {claim.isLoading
              ? "Minting..."
              : claim.isSuccess
              ? "Success!"
              : "Mint Frog"}
          </button>
        ) : (
          
          <div className='center'>
          <WalletMultiButtonDynamic />
       </div>
        
        )}
        <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      </div>
      <div className={`${styles.lightGreen} transparentbox`}>
        <ClaimedSupply program={program} />
    </div>

      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <div className={styles.lightGreen}>
      <div className="transparentbox">
      
  <div className={styles.storycontainer}>
    <div className={styles.greentext}>
        <div className={styles.lightYellow}>
          <h2>Once upon a time...</h2></div>
      <p>
        In a world not so different from our own, there existed a small but mighty community of frogs. These frogs were special, for they were the last of their kind. Only 500 of them remained, scattered throughout the world in the most remote and hard-to-reach places.
      </p>
      <p>
        Despite their small numbers, these frogs were determined to thrive and survive. They sang their songs, they hopped their hops, and they lived their lives in the most magical way possible.
      </p>
      <p>
        But as with any community, there were always a few outsiders among them. These were the mimics, creatures so good at disguising themselves that they could trick even the most experienced frog-watcher. They would disguise themselves in the most peculiar ways, and they would wait for the perfect moment to jump out and surprise their unsuspecting prey.
      </p>
      <p>
        But the frogs were not afraid of these mimics. They knew that if they kept their eyes peeled and their ears open, they could spot a mimic from a mile away. And so, they went about their lives, always on the lookout for these tricksters.
      </p>
      <p>
        As the days passed, the frogs continued to thrive and flourish, their numbers remaining steady. And though the mimics may have been a nuisance at times, the frogs knew that they were an important part of their story, a reminder to always stay alert and to never take anything for granted.
      </p>

      <p>So, join us on this journey, as we explore the world of these unique frogs, and discover the secrets that they hold. But be warned, not everything may be as it seems, and some of the frogs that you encounter may not be frogs at all.</p>
    </div>
    </div>
    </div>
    </div>
  </div>
  );
}
