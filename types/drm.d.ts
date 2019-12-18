import {RequestParams} from "./common";

export interface DRMType {
  /** PlayReady */
  PLAYREADY: string;
  /** Widevine */
  WIDEVINE: string;
}

export interface DRMError {
  /**
   * No error.
   */
  NOT_ERROR: number;

  /**
   * The DRM client is not loaded.
   */
  CLIENT_NOT_LOADED: number;

  /**
   * The vendor managed error.
   */
  VENDOR_ERROR: number;

  /**
   * This API is not supported in the activated DRM.
   */
  API_NOT_SUPPORTED: number;

  /**
   * There is no process matching to the client ID.
   */
  WRONG_CLIENT_ID: number;

  /**
   * It cannot find a key file in DRM store.
   */
  KEY_NOT_FOUND: number;

  /**
   * A part of parameters is not valid data or format.
   */
  INVALID_PARAMS: number;

  /**
   * It's not a supported DRM type.
   */
  UNSUPPORTED_DRM_TYPE: number;

  /**
   * The key file is not a valid format.
   */
  INVALID_KEY_FORMAT: number;

  /**
   * It cannot get the valid time information.
   */
  INVALID_TIME_INFO: number;

  /**
   * The DRM type of the currently loaded client is not matched with the DRM type that was set when the DRM agent is created.
   */
  DRM_TYPE_UNMATCHED: number;

  /**
   * It's an unknown error.
   */
  UNKNOWN_ERROR: number;
}

export interface GetRightsErrorResponse {
  /**
   * Flag that indicates whether the subscription is enabled or not.
   * - true: Enabled
   * - false: Not enabled
   */
  subscribed: boolean;
}

export interface IsLoadedResponse {
  /**
   * Indicates the DRM client is loaded.
   * - true: the DRM client is loaded.
   * - false: the DRM client is not loaded.
   */
  loadStatus: boolean;

  /**
   * Returns the loaded client ID when the DRM client is loaded successfully.
   */
  clientId: string;

  /**
   * Returns the client type of DRM when the DRM client is loaded successfully.
   */
  drmType: DRMType[keyof DRMType];
}

export interface LoadResponse {
  /**
   * If the DRM agent loaded the DRM client successfully, return its client ID.
   */
  clientId: string;
}

export interface SendDrmMessageParams extends RequestParams<SendDrmMessageResponse> {
  /**
   * The message to be provided to the underlying DRM server, which is formatted according to the DRM type.
   */
  msg: string;
}

export interface SendDrmMessageResponse {
  /**
   * The unique ID of message which has led to this resulting message.
   */
  msgId?: string;

  /**
   * The result code only for PlayReady.
   */
  resultCode?: number;

  /**
   * The DRM system specific result message only for PlayReady.
   */
  resultMsg?: string;
}
