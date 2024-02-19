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
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { MetadataPayment } from './metadataPayment';
import { Source } from './source';

export class PaymentCreationRequest {
    /**
    * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
    */
    'idempotencyKey': string;
    /**
    * Universally unique identifier (UUID v4) of the public key used in encryption. NOTE the sandbox environment uses the default value of `key1`. For this reason the example supplied is `key1` rather than a UUID.
    */
    'keyId'?: string;
    'metadata': MetadataPayment;
    'amount': FiatMoneyUsd;
    /**
    * Triggers the automatic capture of the full payment amount. If set to false the payment will only be authorized but not captured.
    */
    'autoCapture'?: boolean = true;
    /**
    * Indicates the verification method for this payment.
    */
    'verification': PaymentCreationRequest.VerificationEnum;
    /**
    * The URL to redirect users to after successful 3DS authentication.
    */
    'verificationSuccessUrl'?: string;
    /**
    * The URL to redirect users to after failed 3DS authentication.
    */
    'verificationFailureUrl'?: string;
    'source': Source;
    /**
    * Description of the payment with length restriction of 240 characters.
    */
    'description'?: string;
    /**
    * PGP encrypted base64 encoded string. Contains CVV. * **CVV (Card Verification Number)**: Three or four digit security code. Only required if `verification` is `cvv`. 
    */
    'encryptedData'?: string;
    /**
    * The channel identifier that can be set for the payment. When not provided, the default channel is used.
    */
    'channel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idempotencyKey",
            "baseName": "idempotencyKey",
            "type": "string"
        },
        {
            "name": "keyId",
            "baseName": "keyId",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MetadataPayment"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "autoCapture",
            "baseName": "autoCapture",
            "type": "boolean"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "PaymentCreationRequest.VerificationEnum"
        },
        {
            "name": "verificationSuccessUrl",
            "baseName": "verificationSuccessUrl",
            "type": "string"
        },
        {
            "name": "verificationFailureUrl",
            "baseName": "verificationFailureUrl",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "Source"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "encryptedData",
            "baseName": "encryptedData",
            "type": "string"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentCreationRequest.attributeTypeMap;
    }
}

export namespace PaymentCreationRequest {
    export enum VerificationEnum {
        None = <any> 'none',
        Cvv = <any> 'cvv',
        ThreeDSecure = <any> 'three_d_secure'
    }
}