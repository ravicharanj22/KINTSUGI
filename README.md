# KINTSUGI
Architecture

KINTSUGI is an oracle based platform between algorand and spark(our own currency).

Three main architectures are:

KINTSUGI-Avax: It contains bridge and liquidity contracts in solidity as well as the oracle interactions.
KINTSUGI-Algorand: It contains PyTeal liquidity and bridge contracts for oracle interactions.
Oracle solution: This script keeps in sync between the two chains to release the corresponding tokens.
Tech Stack

Smart Contracts

Python
Solidity
Frontend

React.js
RandLabs MyAlgo
Web3
Backend (Oracle Bot)

Express
AlgoSDK
How to set up?

#Client Set Up
cd client->
docker build -t back . ->
docker run -p 5000:80


#Setting up oracle
cd oracle->

npm i->
node oracle.js->



WEBSITE LINK FOR COMPANY PORTFOLIO

