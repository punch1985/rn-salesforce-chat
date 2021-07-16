import { NativeModules } from "react-native";

export default class SalesforceChatAPI {
  constructor() {
    this.salesforceChat = NativeModules.RNSalesforceChat;
  }

  throwRequiredFieldError(field) {
    throw new Error(`required field ${field}`);
  }

  isInvalidBooleanParam(param) {
    return param === undefined || param === null;
  }

  async createPreChatObject({ agentLabel, type, value, isRequired, isDisplayedToAgent }) {
    if (!agentLabel) {
      this.throwRequiredFieldError("agentLabel");
    }
    if (this.isInvalidBooleanParam(isDisplayedToAgent)) {
      this.throwRequiredFieldError("isDisplayedToAgent");
    }

    this.salesforceChat.createPreChatObject(
      agentLabel,
      type,
      value,
      isRequired ?? false,
      isDisplayedToAgent ?? false,
    );
  }

  async createUserData({ agentLabel, value, isDisplayedToAgent }) {
    if (!agentLabel) {
      this.throwRequiredFieldError("agentLabel");
    }
    if (this.isInvalidBooleanParam(isDisplayedToAgent)) {
      this.throwRequiredFieldError("isDisplayedToAgent");
    }

    this.salesforceChat.createPreChatData(
      agentLabel,
      value,
      isDisplayedToAgent
    );
  }

  async createEntityField({
    objectFieldName,
    doFind,
    doCreate,
    isExactMatch,
    keyChatUserDataToMap,
  }) {
    if (!objectFieldName) this.throwRequiredFieldError("objectFieldName");
    if (this.isInvalidBooleanParam(doFind)) {
      this.throwRequiredFieldError("doFind");
    }
    if (this.isInvalidBooleanParam(doCreate)) {
      this.throwRequiredFieldError("doCreate");
    }
    if (this.isInvalidBooleanParam(isExactMatch)) {
      this.throwRequiredFieldError("isExactMatch");
    }

    this.salesforceChat.createEntityField(
      objectFieldName,
      doCreate,
      doFind,
      isExactMatch,
      keyChatUserDataToMap
    );
  }

  async createEntity({
    objectType,
    linkToTranscriptField,
    linkToEntityName,
    linkToEntityField,
    showOnCreate,
    keysEntityFieldToMap,
  }) {
    if (!objectType) this.throwRequiredFieldError("objectType");
    if (this.isInvalidBooleanParam(showOnCreate)) {
      this.throwRequiredFieldError("showOnCreate");
    }

    this.salesforceChat.createEntity(
      objectType,
      linkToTranscriptField,
      linkToEntityName,
      linkToEntityField,
      showOnCreate,
      keysEntityFieldToMap
    );
  }

  async configureChat({
    orgId,
    buttonId,
    deploymentId,
    liveAgentPod,
    visitorName,
  }) {
    if (!orgId) this.throwRequiredFieldError("orgId");
    if (!buttonId) this.throwRequiredFieldError("buttonId");
    if (!deploymentId) this.throwRequiredFieldError("deploymentId");
    if (!liveAgentPod) this.throwRequiredFieldError("liveAgentPod");

    this.salesforceChat.configureChat(
      orgId,
      buttonId,
      deploymentId,
      liveAgentPod,
      visitorName
    );
  }

  async openChat(showPreChat, errorCallback) {
    this.salesforceChat.openChat(showPreChat, errorCallback);
  }
}
