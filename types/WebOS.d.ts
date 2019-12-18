import { ObjectValue } from './common';
import { DeviceInfo } from './DeviceInfo';
import { ServiceRequestParams, ServiceRequestReturn } from './ServiceRequest';
import { SystemInfo } from "./SystemInfo";

export interface WebOS {
  /**
   * A member representing the build version of the webOSTV.js library
   */
  readonly libVersion: string;

  /**
   * A member representing the platform identification of webOS variants
   */
  readonly platform: {
    /**
     * Indicate whether the platform identification is webOS TV. If the platform identification is not webOS TV, undefined is returned.
     */
    tv: true | undefined;
  };

  /**
   * Returns the device-specific information regarding the TV model, OS version, SDK version, screen size, and resolution
   *
   * @returns JSON object containing the device information details
   */
  deviceInfo(callback: (deviceInfo: DeviceInfo) => any): void;

  /**
   * Returns an app ID of an app calling this method
   */
  fetchAppId(): string;

  /**
   * Returns the appinfo.json data of the caller app with a saved cache
   *
   * @param path An optional relative file path to read appinfo.json. The file name (appinfo.json) must be included in the file path
   * - If your app is packaged into an IPK file, get the path using `fetchAppRootPath` method
   * - If your app is hosted by a server, the path will be the URL of the server
   * @returns The JSON object read from the app's appinfo.json file. If it is not found, undefined is returned.
   */
  fetchAppInfo(callback: (appInfo: ObjectValue | undefined) => any, path?: string): void;

  /**
   * Returns the full URI path of the caller app
   *
   * @returns The app's URI path where the app is located
   */
  fetchAppRootPath(): string;

  /**
   * Emulates the back key of the remote controller to move backward 1 level
   */
  platformBack(): void;

  /**
   * Returns the system-specific information regarding country, service country, and timezone
   */
  systemInfo(): SystemInfo;

  readonly keyboard: {
    /**
     * Checks whether the virtual keyboard is visible.
     *
     * @returns Indicates whether the virtual keyboard is displayed or hidden
     * - true: the virtual keyboard is displayed
     * - false: the virtual keyboard is hidden
     */
    isShowing(): boolean;
  }

  readonly service: {
    /**
     * Creates and sends a service request to the system of the webOS TV
     *
     * @param uri
     * The service URI.
     * It accepts the normal service URI format, as well as the extended format with the service method included.
     *
     * @param params
     * Service request options.
     *
     * @returns Resulting request object. This object can be used to cancel subscriptions.
     */
    request<T=any>(uri: string, params?: ServiceRequestParams<T>): any;
  };
}
