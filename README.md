# Farcaster dynamic loading issue

Dynamic loading logic is added in `src/context/solana/index.tsx:31` and `src/context/solana/index.tsx:60`

In a raw environment, it's difficult to reproduce I believe due to low network latency and a low amount of JS to be evaluated and executed

To be able to reproduce it _sometimes_ it's better to follow the next steps:

1. `npm run dev`
2. `ngrok http 3000 --region eu` (depending on your region, chose the one that is away from you. For US chose `eu`, and vice versa)
3. try to access ngrok link from the Farcaster mobile app
4. if it works fine, hit reload several times. For me one in 5-7 times it's reproducible
5. Once reproduced, you will notice endless "Connection..." button on your screen
