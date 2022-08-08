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
import { BasicCancel } from './basicCancel';
import { BasicRefund } from './basicRefund';
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { MetadataPhoneEmail } from './metadataPhoneEmail';
import { PaymentErrorCode } from './paymentErrorCode';
import { PaymentStatus } from './paymentStatus';
import { PaymentVerificationResponse } from './paymentVerificationResponse';
import { RequiredAction } from './requiredAction';
import { RiskEvaluation } from './riskEvaluation';
import { SourceResponse } from './sourceResponse';

export class DetailedPayment {
    /**
    * Unique system generated identifier for the entity.
    */
    'id': string;
    /**
    * Type of the payment object.
    */
    'type': DetailedPayment.TypeEnum;
    /**
    * Unique system generated identifier for the merchant.
    */
    'merchantId': string;
    /**
    * Unique system generated identifier for the wallet of the merchant.
    */
    'merchantWalletId'?: string;
    'amount': FiatMoneyUsd;
    'source': SourceResponse;
    /**
    * Enumerated description of the payment.
    */
    'description'?: DetailedPayment.DescriptionEnum;
    'status': PaymentStatus;
    /**
    * Determines if a payment has successfully been captured. This property is only present for payments that did not use auto capture.
    */
    'captured'?: boolean;
    'captureAmount'?: FiatMoneyUsd;
    /**
    * ISO-8601 UTC date/time format.
    */
    'captureDate'?: string;
    'requiredAction'?: RequiredAction;
    'verification'?: PaymentVerificationResponse;
    'cancel'?: BasicCancel | null;
    'refunds'?: Array<BasicRefund>;
    'fees'?: FiatMoneyUsd;
    /**
    * Payment tracking reference. Will be present once known.
    */
    'trackingRef'?: string | null;
    'errorCode'?: PaymentErrorCode | null;
    'metadata'?: MetadataPhoneEmail;
    'riskEvaluation'?: RiskEvaluation | null;
    /**
    * The channel identifier that can be set for the payment. When not provided, the default channel is used.
    */
    'channel'?: string;
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
            "name": "type",
            "baseName": "type",
            "type": "DetailedPayment.TypeEnum"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "merchantWalletId",
            "baseName": "merchantWalletId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "SourceResponse"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "DetailedPayment.DescriptionEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentStatus"
        },
        {
            "name": "captured",
            "baseName": "captured",
            "type": "boolean"
        },
        {
            "name": "captureAmount",
            "baseName": "captureAmount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "captureDate",
            "baseName": "captureDate",
            "type": "string"
        },
        {
            "name": "requiredAction",
            "baseName": "requiredAction",
            "type": "RequiredAction"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "PaymentVerificationResponse"
        },
        {
            "name": "cancel",
            "baseName": "cancel",
            "type": "BasicCancel"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "Array<BasicRefund>"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "trackingRef",
            "baseName": "trackingRef",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "PaymentErrorCode"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetadataPhoneEmail"
        },
        {
            "name": "riskEvaluation",
            "baseName": "riskEvaluation",
            "type": "RiskEvaluation"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
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
        return DetailedPayment.attributeTypeMap;
    }
}

export namespace DetailedPayment {
    export enum TypeEnum {
        Payment = <any> 'payment'
    }
    export enum DescriptionEnum {
        Payment = <any> 'Payment'
    }
}
