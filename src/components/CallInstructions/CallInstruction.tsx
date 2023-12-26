import * as React from "react";
import { View, Image, Text } from "react-native";
import { PublicKey, Transaction, Connection } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { useState, useCallback } from "react";
import { Button } from "react-native";
import { useProgram } from "../../hooks/useProgram";
import {
  usePublicKeys,
  useSolanaConnection,
  useSolanaProvider,
} from "../../hooks/xnft-hooks";
import { ProgramSource } from "../../../utils/type";
type ButtonProps = Readonly<{
  anchorWallet: anchor.Wallet;
}>;

//for initialize instructions
//for increment instructions

//handler functions for inputs feilds

const Call_initialize_Instruction= () => {
  const XnftPublickey = usePublicKeys();
  const [signingInProgress, setSigningInProgress] = useState(false);
  const connection = useSolanaConnection();
  const { program, programId } = useProgram(connection);

  const { counterPDA_for_initialize } = useProgram(connection);

  const initializeCounter = useCallback(
    async (program: Program<ProgramSource>, authorityPublicKey: PublicKey) => {
      // Call the increment function of the program.
      const signature = await program.methods
        .initialize()
        .accounts({
          counter: counterPDA_for_initialize,
          authority: XnftPublickey,
        })
        .rpc();

      return signature;
    },
    [counterPDA_for_initialize]
  );

  return (
    <Button
      title={`Call initialize Instructions`}
      disabled={signingInProgress || !program}
      onPress={async () => {
        if (signingInProgress || !program) {
          return;
        }
        setSigningInProgress(true);
        try {
          const signature = await initializeCounter(program, XnftPublickey);
        } finally {
          setSigningInProgress(false);
        }
      }}
    />
  );
}

const Call_increment_Instruction = () => {
  const [signingInProgress, setSigningInProgress] = useState(false);
  const XnftPublickey = usePublicKeys();
  const connection: Connection = useSolanaConnection();
  //const {selectedAccount} = useAuthorization();
  const { program, programId } = useProgram(connection);

  const { counterPDA_for_increment } = useProgram(connection);

  const initializeCounter = useCallback(
    async (program: Program<ProgramSource>, authorityPublicKey: PublicKey) => {
      // Call the increment function of the program.
      const signature = await program.methods
        .increment()
        .accounts({
          counter: counterPDA_for_increment,
          authority: XnftPublickey,
        })
        .rpc();

      return signature;
    },
    [counterPDA_for_increment]
  );

  return (
    <Button
      title={`Call increment Instructions`}
      disabled={signingInProgress || !program}
      onPress={async () => {
        if (signingInProgress || !program) {
          return;
        }
        setSigningInProgress(true);
        try {
          const signature = await initializeCounter(program, XnftPublickey);
        } finally {
          setSigningInProgress(false);
        }
      }}
    />
  );
};

export { Call_initialize_Instruction, Call_increment_Instruction };
