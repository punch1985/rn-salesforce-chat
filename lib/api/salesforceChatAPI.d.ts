import { ChatUserData } from "./interfaces/ChatUserData";
import { ChatEntityField } from "./interfaces/ChatEntityField";
import { ChatEntity } from "./interfaces/ChatEntity";
import { ChatConfig } from "./interfaces/ChatConfig";
import { PreChatObject } from "./interfaces/PreChatObject";

export default class SalesforceChatAPI {
  createPreChatObject(preChatObject: PreChatObject): Promise<void>;
  createUserData(chatUserData: ChatUserData): Promise<void>;
  createEntityField(chatEntityField: ChatEntityField): Promise<void>;
  createEntity(chatEntity: ChatEntity): Promise<void>;
  configureChat(chatConfig: ChatConfig): Promise<void>;
  openChat(showPreChat: boolean, errorCallback: (errorMessage: string) => void): Promise<void>;
}
