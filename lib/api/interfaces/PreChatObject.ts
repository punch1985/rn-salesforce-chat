export interface PreChatObject {
    agentLabel: string;
    type: 'text' | 'hidden' | null;
    value: string | null;
    isRequired: boolean,
    isDisplayedToAgent: boolean;
  }
  