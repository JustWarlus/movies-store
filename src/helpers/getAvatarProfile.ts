export const getAvatarProfile = (name: string) => {
  return (name.split("@")[0][0] + name.split("@")[1][0]).toLocaleUpperCase();
};
