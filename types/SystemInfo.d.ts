export declare interface SystemInfo {
  /**
   * The country that TV broadcasts. If the value does not exist, undefined is returned
   */
  country?: string;

  /**
   * The country where the Smart service is provided. If the value does not exist, undefined is returned
   */
  smartServiceCountry?: string;

  /**
   * The time zone that TV broadcasts. If the value does not exist, undefined is returned
   */
  timezone?: string;
}
