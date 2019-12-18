export interface DeviceInfo {
  /**
   * The model name of the device in UTF-8 format.
   */
  modelName: string;

  /**
   * The model name of the device in ASCII format.
   */
  modelNameAscii: string;

  /**
   * The full name of OS firmware version.
   */
  version: string;

  /**
   * The subset of OS version: Major version number.
   */
  versionMajor: number;

  /**
   * The subset of OS version: Minor version number.
   */
  versionMinor: number;

  /**
   * The subset of OS version: Revision version number.
   */
  versionDot: number;

  /**
   * The webOS SDK version.
   */
  sdkVersion: string;

  /**
   * The screen width in pixels.
   */
  screenWidth: number;

  /**
   * The screen Height in pixels.
   */
  screenHeight: number;

  /**
   * Indicates whether the device supports Ultra HD resolution.
   * - true: The device supports Ultra HD resolution.
   * - false: The device does not support Ultra HD resolution.
   */
  uhd?: boolean;
}
