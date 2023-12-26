import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text ,SafeAreaView , View, TextInput , Button} from 'react-native';
import * as anchor from '@coral-xyz/anchor';
import {PublicKey} from '@solana/web3.js';

import {Program} from '@coral-xyz/anchor';


import {
 //Call_initialize_Instruction,
 Call_increment_Instruction,
} 
from '../components/CallInstructions/CallInstruction'

type CounterAccount = {
  count: anchor.BN;
  authority: PublicKey;
  bump: number;
};

export function HomeScreen() {
  const [selectedAccount , setSelectedAccount] = useState(true)

  return (
    <>
      {/* <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {selectedAccount ? (
            <>
            <SafeAreaView>
              <ScrollView style={styles.scroolView}>
             

                <Button
                  title={`Call initialize Instructions`}
                />
                </View>
                <Button
                  title={`Call increment Instructions`}
                />
                </View>

          
               </ScrollView>
              </SafeAreaView>
            </>
          ) : null}
        </ScrollView>
        
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 16,
    flex: 1,
  },
  scrollContainer: {
    height: '100%',
  },
  buttonGroup: {
    flexDirection: 'column',
    paddingVertical: 4,
  },
  scroolView: {
    marginBottom: 10,
  },
  textSubHeading : {
     textAlign : 'center',
    fontSize: 18,
    marginTop : 10,
    fontWeight: 'bold',
    color : 'white'
  },
   input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    
  },
  button: {
    height: 40,
    marginTop: 20,
    borderRadius : 4,
  },
  text : {
    fontSize: 16,
    marginTop : 10,
    fontWeight: 'bold',
    color : 'white'
  },
 
  
});
