import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/nonfroglogobanner.png"
            height={300}
            width={360}
            style={{
              objectFit: "contain",
            }}
            alt="NonFroggableToads"
          />
          
        </div>
        <h1 className={styles.h1}>Discover the secret world of frogs and find the mimics among them! 👋</h1>
        <p className={styles.explain}>
          Check out the{" "}
          <b>
            <a
              href="https://JoltedDesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Izsapo Collection
            </a>
          </b>
          .
        </p>

        <WalletMultiButtonDynamic />
      </div>
    </>
  );
};

export default Home;
