/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface ChatContainer {}
  interface ChatContent {}
  interface ChatHeader {}
  interface ChatMenu {}
  interface ConversationList {}
  interface GroupInfo {}
  interface InputSearch {}
  interface RoadmapInfo {}
  interface RoadmapList {}
  interface ToggleMenu {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLChatContainerElement extends Components.ChatContainer, HTMLStencilElement {}
  var HTMLChatContainerElement: {
    prototype: HTMLChatContainerElement;
    new (): HTMLChatContainerElement;
  };

  interface HTMLChatContentElement extends Components.ChatContent, HTMLStencilElement {}
  var HTMLChatContentElement: {
    prototype: HTMLChatContentElement;
    new (): HTMLChatContentElement;
  };

  interface HTMLChatHeaderElement extends Components.ChatHeader, HTMLStencilElement {}
  var HTMLChatHeaderElement: {
    prototype: HTMLChatHeaderElement;
    new (): HTMLChatHeaderElement;
  };

  interface HTMLChatMenuElement extends Components.ChatMenu, HTMLStencilElement {}
  var HTMLChatMenuElement: {
    prototype: HTMLChatMenuElement;
    new (): HTMLChatMenuElement;
  };

  interface HTMLConversationListElement extends Components.ConversationList, HTMLStencilElement {}
  var HTMLConversationListElement: {
    prototype: HTMLConversationListElement;
    new (): HTMLConversationListElement;
  };

  interface HTMLGroupInfoElement extends Components.GroupInfo, HTMLStencilElement {}
  var HTMLGroupInfoElement: {
    prototype: HTMLGroupInfoElement;
    new (): HTMLGroupInfoElement;
  };

  interface HTMLInputSearchElement extends Components.InputSearch, HTMLStencilElement {}
  var HTMLInputSearchElement: {
    prototype: HTMLInputSearchElement;
    new (): HTMLInputSearchElement;
  };

  interface HTMLRoadmapInfoElement extends Components.RoadmapInfo, HTMLStencilElement {}
  var HTMLRoadmapInfoElement: {
    prototype: HTMLRoadmapInfoElement;
    new (): HTMLRoadmapInfoElement;
  };

  interface HTMLRoadmapListElement extends Components.RoadmapList, HTMLStencilElement {}
  var HTMLRoadmapListElement: {
    prototype: HTMLRoadmapListElement;
    new (): HTMLRoadmapListElement;
  };

  interface HTMLToggleMenuElement extends Components.ToggleMenu, HTMLStencilElement {}
  var HTMLToggleMenuElement: {
    prototype: HTMLToggleMenuElement;
    new (): HTMLToggleMenuElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'chat-container': HTMLChatContainerElement;
    'chat-content': HTMLChatContentElement;
    'chat-header': HTMLChatHeaderElement;
    'chat-menu': HTMLChatMenuElement;
    'conversation-list': HTMLConversationListElement;
    'group-info': HTMLGroupInfoElement;
    'input-search': HTMLInputSearchElement;
    'roadmap-info': HTMLRoadmapInfoElement;
    'roadmap-list': HTMLRoadmapListElement;
    'toggle-menu': HTMLToggleMenuElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface ChatContainer extends JSXBase.HTMLAttributes<HTMLChatContainerElement> {}
  interface ChatContent extends JSXBase.HTMLAttributes<HTMLChatContentElement> {}
  interface ChatHeader extends JSXBase.HTMLAttributes<HTMLChatHeaderElement> {}
  interface ChatMenu extends JSXBase.HTMLAttributes<HTMLChatMenuElement> {}
  interface ConversationList extends JSXBase.HTMLAttributes<HTMLConversationListElement> {}
  interface GroupInfo extends JSXBase.HTMLAttributes<HTMLGroupInfoElement> {}
  interface InputSearch extends JSXBase.HTMLAttributes<HTMLInputSearchElement> {}
  interface RoadmapInfo extends JSXBase.HTMLAttributes<HTMLRoadmapInfoElement> {}
  interface RoadmapList extends JSXBase.HTMLAttributes<HTMLRoadmapListElement> {}
  interface ToggleMenu extends JSXBase.HTMLAttributes<HTMLToggleMenuElement> {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'chat-container': ChatContainer;
    'chat-content': ChatContent;
    'chat-header': ChatHeader;
    'chat-menu': ChatMenu;
    'conversation-list': ConversationList;
    'group-info': GroupInfo;
    'input-search': InputSearch;
    'roadmap-info': RoadmapInfo;
    'roadmap-list': RoadmapList;
    'toggle-menu': ToggleMenu;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


