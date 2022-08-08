/**
 * Core Functionality
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BankDestination } from './bankDestination';
import { FiatMoney } from './fiatMoney';
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { PayoutBusinessAccountAdjustments } from './payoutBusinessAccountAdjustments';
import { PayoutErrorCode } from './payoutErrorCode';
import { PayoutStatus } from './payoutStatus';
import { RiskEvaluation } from './riskEvaluation';
import { UnwithdrawalObject } from './unwithdrawalObject';

export class PayoutBusinessAccount {
    /**
    * Unique system generated identifier for the entity.
    */
    'id'?: string;
    /**
    * The identifier of the source wallet used to fund a payout.
    */
    'sourceWalletId'?: string;
    'destination'?: BankDestination;
    'amount'?: FiatMoney;
    'fees'?: FiatMoneyUsd;
    'status'?: PayoutStatus;
    /**
    * A payout tracking reference. Will be present once known.
    */
    'trackingRef'?: any | null;
    'errorCode'?: PayoutErrorCode | null;
    'riskEvaluation'?: RiskEvaluation | null;
    'adjustments'?: PayoutBusinessAccountAdjustments | null;
    '_return'?: UnwithdrawalObject | null;
    /**
    * ISO-8601 UTC date/time format.
    */
    'createDate'?: string;
    /**
    * ISO-8601 UTC date/time format.
    */
    'updateDate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "sourceWalletId",
            "baseName": "sourceWalletId",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "BankDestination"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoney"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PayoutStatus"
        },
        {
            "name": "trackingRef",
            "baseName": "trackingRef",
            "type": "any"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "PayoutErrorCode"
        },
        {
            "name": "riskEvaluation",
            "baseName": "riskEvaluation",
            "type": "RiskEvaluation"
        },
        {
            "name": "adjustments",
            "baseName": "adjustments",
            "type": "PayoutBusinessAccountAdjustments"
        },
        {
            "name": "_return",
            "baseName": "return",
            "type": "UnwithdrawalObject"
        },
        {
            "name": "createDate",
            "baseName": "createDate",
            "type": "string"
        },
        {
            "name": "updateDate",
            "baseName": "updateDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PayoutBusinessAccount.attributeTypeMap;
    }
}

