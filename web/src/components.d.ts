/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import '@stencil/router';


export namespace Components {

  interface AntList {}
  interface AntListAttributes extends StencilHTMLAttributes {}

  interface AntLogin {}
  interface AntLoginAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AntList': Components.AntList;
    'AntLogin': Components.AntLogin;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'ant-list': Components.AntListAttributes;
    'ant-login': Components.AntLoginAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAntListElement extends Components.AntList, HTMLStencilElement {}
  var HTMLAntListElement: {
    prototype: HTMLAntListElement;
    new (): HTMLAntListElement;
  };

  interface HTMLAntLoginElement extends Components.AntLogin, HTMLStencilElement {}
  var HTMLAntLoginElement: {
    prototype: HTMLAntLoginElement;
    new (): HTMLAntLoginElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'ant-list': HTMLAntListElement
    'ant-login': HTMLAntLoginElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'ant-list': HTMLAntListElement;
    'ant-login': HTMLAntLoginElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
