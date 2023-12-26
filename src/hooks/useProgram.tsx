import {AnchorProvider, Program , Provider} from '@coral-xyz/anchor';
import {Connection, PublicKey} from '@solana/web3.js';
import {useMemo} from 'react';
import * as anchor from '@coral-xyz/anchor';
import { ProgramSource } from '../../utils/type';
import idl from '../../utils/idl.json'


//xnft shit
import {useSolanaProvider} from '../hooks/xnft-hooks'


export function useProgram (
    connection : Connection
) {

  const ProgramId = useMemo(() => {
    return new PublicKey('CFmihRWxuAqHWDW6V2wimb5QPcEzqTCCkcGcCP7VfVWZ');
  }, []);
  const provider : Provider = useSolanaProvider()

  const [counterPDA_for_initialize] = useMemo(()=>{
    const counterSeed_for_initialize = anchor.utils.bytes.utf8.encode('counter');
    return anchor.web3.PublicKey.findProgramAddressSync(
      [counterSeed_for_initialize],
      ProgramId,
    )
  },[ProgramId])
  const [counterPDA_for_increment] = useMemo(()=>{
    const counterSeed_for_increment = anchor.utils.bytes.utf8.encode('counter');
    return anchor.web3.PublicKey.findProgramAddressSync(
      [counterSeed_for_increment],
      ProgramId,
    )
  },[ProgramId])


  const program = useMemo(() => {
    if (!provider) {
      return null;
    }

    return new Program<ProgramSource>(
      idl as ProgramSource,
      ProgramId,
      provider,
    );
  }, [ProgramId, provider]);

   const value = useMemo(
    () => ({
      program: program,
      programId: ProgramId,
      counterPDA_for_initialize : counterPDA_for_initialize,
      counterPDA_for_increment : counterPDA_for_increment,
    }),
    [program, ProgramId],
  );

  return value;
}
