/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Fee } from "./fee";
import { Money } from "./money";
import { RiskEvaluation } from "./risk-evaluation";
import { TransferDestinationLocation } from "./transfer-destination-location";
import { TransferErrorCode } from "./transfer-error-code";
import { TransferSourceLocation } from "./transfer-source-location";

/**
 * A transfer of funds.
 * @export
 * @interface TransferDetailedTransfer
 */
export interface TransferDetailedTransfer {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof TransferDetailedTransfer
   */
  id: string;
  /**
   *
   * @type {TransferSourceLocation}
   * @memberof TransferDetailedTransfer
   */
  source: TransferSourceLocation;
  /**
   *
   * @type {TransferDestinationLocation}
   * @memberof TransferDetailedTransfer
   */
  destination: TransferDestinationLocation;
  /**
   *
   * @type {Money}
   * @memberof TransferDetailedTransfer
   */
  amount: Money;
  /**
   * An array of fees applied to a transaction. This is only available when there is at least one non-zero fee.
   * @type {Array<Fee>}
   * @memberof TransferDetailedTransfer
   */
  fees?: Array<Fee>;
  /**
   * A hash that uniquely identifies the onchain transaction. This is only available where either source or destination are of type blockchain.
   * @type {string}
   * @memberof TransferDetailedTransfer
   */
  transactionHash?: string;
  /**
   * Status of the transfer. Status `pending` indicates that the transfer is in the process of running; `complete` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof TransferDetailedTransfer
   */
  status: TransferDetailedTransferStatusEnum;
  /**
   *
   * @type {TransferErrorCode}
   * @memberof TransferDetailedTransfer
   */
  errorCode?: TransferErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof TransferDetailedTransfer
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof TransferDetailedTransfer
   */
  createDate?: string;
}

export const TransferDetailedTransferStatusEnum = {
  Failed: "failed",
  Pending: "pending",
  Complete: "complete"
} as const;

export type TransferDetailedTransferStatusEnum =
  typeof TransferDetailedTransferStatusEnum[keyof typeof TransferDetailedTransferStatusEnum];
