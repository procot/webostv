import { ConnectionStatus, GetConnectionStatusParameters } from './ConnectionStatus';
import { DRMAgent } from './DRMAgent';
import { DRMError, DRMType } from './drm';
import { LGUDIDResponse } from './LGUDIDResponse';
import { LaunchParameters } from './LaunchParameters';
import { ObjectValue, RequestParams } from './common';

export interface WebOSDev {
  /**
   * A member representing the list of built-in apps on the webOS TV opened to external developers.
   */
  readonly APP: {
    /** The built-in browser on the webOS TV */
    BROWSER: string;
  };

  /**
   * An object containing properties that represent the DRM error number and the DRM type.
   */
  readonly DRM: {
    /** The error number from DRM service */
    Error: DRMError;
    /** The type of DRM */
    Type: DRMType;
  };

  /**
   * Returns DRMAgent instance of a specific DRM type.
   * @param type The DRM type to be set to the DRMAgent instance.
   * The value of the DRM type must be taken from `DRM.Type` field (`DRM.Type.PLAYREADY` or `DRM.Type.WIDEVINE`)
   *
   * @example
   * const drmType = webOSDevPromised.DRM.Type;
   * const drmAgent = webOSDevPromised.drmAgent(drmType);
   */
  drmAgent(type: DRMType[keyof DRMType]): DRMAgent;

  /**
   * Launches an application with parameters.
   * @param parameters The JSON object containing an app ID, parameters
   */
  launch(params: LaunchParameters): void;

  /**
   * Passes parameters of an app launched by the webOSDev.launch method.
   */
  launchParams(): ObjectValue;

  /**
   * Returns a device ID provided by the webOS TV since webOS TV 3.0.
   */
  LGUDID(params: RequestParams<LGUDIDResponse>): void;

  readonly connection: {
    /**
     * Returns the network connection state.
     */
    getStatus(params: GetConnectionStatusParameters): void;
  };
}
