export interface ChatEntity {
  objectType: string;
  linkToTranscriptField: string | null;
  linkToEntityName: string | null;
  linkToEntityField: string | null;
  showOnCreate: boolean;
  keysEntityFieldToMap: string[] | null;
}
