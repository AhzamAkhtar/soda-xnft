export type ProgramSource = {
  version: "0.1.0";
  name: "basic_counter";
  instructions: [
    {
      name: "initialize";
      accounts: [
        { name: "counter"; isMut: true; isSigner: false; pda: { seeds: [] } },
        { name: "authority"; isMut: true; isSigner: true; pda: { seeds: [] } },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
          pda: { seeds: [] };
        }
      ];
      args: [];
    },
    {
      name: "increment";
      accounts: [
        { name: "counter"; isMut: true; isSigner: false; pda: { seeds: [] } },
        { name: "authority"; isMut: false; isSigner: true; pda: { seeds: [] } }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "Counter";
      type: {
        kind: "struct";
        fields: [
          { name: "authority"; type: "publicKey" },
          { name: "count"; type: "u64" },
          { name: "bump"; type: "u8" }
        ];
      };
    }
  ];
  types: [];
  events: [];
  errors: [
    {
      code: 6000;
      name: "Unauthorized";
      msg: "You are not authorized to perform this action.";
    },
    { code: 6001; name: "CannotGetBump"; msg: "Cannot get the bump." }
  ];
  metadata: { address: "" };
};

export const IDL: ProgramSource = {
  version: "0.1.0",
  name: "basic_counter",
  instructions: [
    {
      name: "initialize",
      accounts: [
        { name: "counter", isMut: true, isSigner: false, pda: { seeds: [] } },
        { name: "authority", isMut: true, isSigner: true, pda: { seeds: [] } },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
          pda: { seeds: [] },
        },
      ],
      args: [],
    },
    {
      name: "increment",
      accounts: [
        { name: "counter", isMut: true, isSigner: false, pda: { seeds: [] } },
        { name: "authority", isMut: false, isSigner: true, pda: { seeds: [] } },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "Counter",
      type: {
        kind: "struct",
        fields: [
          { name: "authority", type: "publicKey" },
          { name: "count", type: "u64" },
          { name: "bump", type: "u8" },
        ],
      },
    },
  ],
  types: [],
  events: [],
  errors: [
    {
      code: 6000,
      name: "Unauthorized",
      msg: "You are not authorized to perform this action.",
    },
    { code: 6001, name: "CannotGetBump", msg: "Cannot get the bump." },
  ],
  metadata: { address: "" },
};
