import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://pbnj-8146.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PBnJ Shop
              </a>
            </span>
          </h1>

          <p className="description">
            Get started by redeeming your desired PBJ Physical in the PBnJ Shop{" "}

          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="grid">
          <a
            href="https://portal.thirdweb.com/"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/mint-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Mint ➜</h2>
              <p>
                Mint your PBJ on the Ethereum blockchain!
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/marketplace-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Marketplace ➜</h2>
              <p>
                Bid, Buy Sell PBJs on the Marketplace.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/templates"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/shop-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Shop ➜</h2>
              <p>
                Discover and redeem PBJ Uncrustables.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
