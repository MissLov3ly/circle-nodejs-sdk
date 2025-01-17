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

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { GetPublicKeyResponse } from "../models";
/**
 * EncryptionApi - axios parameter creator
 * @export
 */
export const EncryptionApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
     * @summary Get public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPublicKey: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/encryption/public`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * EncryptionApi - functional programming interface
 * @export
 */
export const EncryptionApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    EncryptionApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
     * @summary Get public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPublicKey(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetPublicKeyResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPublicKey(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * EncryptionApi - factory interface
 * @export
 */
export const EncryptionApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EncryptionApiFp(configuration);
  return {
    /**
     * Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
     * @summary Get public key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPublicKey(options?: any): AxiosPromise<GetPublicKeyResponse> {
      return localVarFp
        .getPublicKey(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * EncryptionApi - object-oriented interface
 * @export
 * @class EncryptionApi
 * @extends {BaseAPI}
 */
export class EncryptionApi extends BaseAPI {
  /**
   * Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
   * @summary Get public key
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EncryptionApi
   */
  public getPublicKey(options?: AxiosRequestConfig) {
    return EncryptionApiFp(this.configuration)
      .getPublicKey(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
