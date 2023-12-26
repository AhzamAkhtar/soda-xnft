import * as React from 'react';
import * as Linking from "expo-linking";
import { Button, Image, Text } from "react-native";
import { atom, useRecoilState } from "recoil";
import {
} from 'react-native'
import { Connection } from '@solana/web3.js';
import { Screen } from "../components/Screen";
import { Section } from "../components/Section";
import { SignMessageButton } from "../components/SignMessageButton";
import { usePublicKeys, useSolanaConnection } from '../hooks/xnft-hooks';
const testAtom = atom<"native" | "bright">({
  key: "testAtom",
  default: "native",
});
import { Call_increment_Instruction, Call_initialize_Instruction } from '../components/CallInstructions/CallInstruction';
function LearnMoreLink({ url }: { url: string }) {
  return <Text onPress={() => Linking.openURL(url)}>Learn more</Text>;
}

export const  ExamplesScreens = () =>  {
  const [future, setFuture] = useRecoilState(testAtom);
  const pubkey = usePublicKeys()

  const testing = () => {
    console.log(pubkey.solana)
  }
  return (
    <Screen>
      {/* <Section title="Recoil">
        <Button
          title={`The Future is soda`}
          color={
            future === "bright" ? "rgb(228, 208, 10)" : "rgb(33, 150, 243)"
          }
          onPress={() => testing()}
          
        />
      </Section>
    
      <Section title="Local Image Import">
        <Image
          source={require("../../assets/icon.png")}
          style={
            { width: 50, height: 50 }
          }
        />
        <LearnMoreLink url="https://reactnative.dev/docs/images#static-image-resources" />
      </Section> */}
      <Section title="Custom Font">
        <Text style={
          { fontFamily: "Inter_900Black" }
        }>
          Inter 900 Black Font
        </Text>
        <LearnMoreLink url="https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font" />
      </Section>
      <Section title="Opening a URL">
        <Button
          onPress={() => Linking.openURL("https://xnft.gg")}
          title="Open xNFT.gg"
        />
        <LearnMoreLink url="https://docs.expo.dev/versions/latest/sdk/linking/#linkingopenurlurl" />
      </Section>
      <Section title="Signing a message">
        <SignMessageButton />
      </Section>
      <Call_initialize_Instruction/>
      <Call_increment_Instruction/>
    </Screen>
  );
}
