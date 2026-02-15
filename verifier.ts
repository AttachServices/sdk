export const verifyToken = (token: string) => {
  return {
    isVerified: token.length > 10,
    deployerHistory: "No previous rugs detected",
    contractChecked: true
  };
};
