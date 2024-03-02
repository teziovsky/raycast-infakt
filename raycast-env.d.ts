/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** X-inFakt-ApiKey - X-inFakt-ApiKey */
  "xApiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search_invoices` command */
  export type SearchInvoices = ExtensionPreferences & {}
  /** Preferences accessible in the `create_invoice` command */
  export type CreateInvoice = ExtensionPreferences & {}
  /** Preferences accessible in the `search_clients` command */
  export type SearchClients = ExtensionPreferences & {}
  /** Preferences accessible in the `search_products` command */
  export type SearchProducts = ExtensionPreferences & {}
  /** Preferences accessible in the `create_product` command */
  export type CreateProduct = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search_invoices` command */
  export type SearchInvoices = {}
  /** Arguments passed to the `create_invoice` command */
  export type CreateInvoice = {}
  /** Arguments passed to the `search_clients` command */
  export type SearchClients = {}
  /** Arguments passed to the `search_products` command */
  export type SearchProducts = {}
  /** Arguments passed to the `create_product` command */
  export type CreateProduct = {}
}


