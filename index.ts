import type { Address, Language, LanguageContext, HolochainLanguageDelegate, Interaction } from "https://esm.sh/@perspect3vism/ad4m@0.5.0";
import Adapter from "./adapter.ts";

function interactions(expression: Address): Interaction[] {
  return [];
}

// Your language name goes here
//!@ad4m-template-variable
export const name = "ad4m-language-template";

export default async function create(context: LanguageContext): Promise<Language> {
  // Holochain Delegate is passed as a context variable
  const Holochain = context.Holochain as HolochainLanguageDelegate;
  
  // To use holochain DNA, you need to register it with the Holochain Delegate
  // @ts-ignore
  await Holochain.registerDNAs([{ file: DNA, nick: DNA_NICK }]);
  
  const expressionAdapter = new Adapter(context);

  return {
    name,
    expressionAdapter,
    interactions,
  } as Language;
}
