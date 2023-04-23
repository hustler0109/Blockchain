import { sris } from "@my-app/contracts";

export const getRouterInfo = async (routerAddress, web3) => {
  const router = new web3.eth.Contract(sris.Router-Protocol-2, routerAddress);
  
  return {
    factory: await router.methods.factory().call(),
  };
}
