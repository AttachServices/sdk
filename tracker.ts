export const trackToken = (token: string) => {
  return {
    volume24h: Math.floor(Math.random() * 100000),
    holders: Math.floor(Math.random() * 5000),
    deployerWalletActivity: "Active"
  };
};
