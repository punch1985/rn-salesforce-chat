export interface PreChatObject {
    agentLabel: string;
    type: 'text' | 'hidden' | null;
    value: string | null;
    isDisplayedToAgent: boolean;
  }
  