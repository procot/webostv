function test_webOS() {
    window.webOS = webOS;
}

function test_deviceInfo() {
    // $ExpectType void
    webOS.deviceInfo(deviceInfo => {
        deviceInfo; // $ExpectType DeviceInfo
        deviceInfo.modelName; // $ExpectType string
        deviceInfo.modelNameAscii; // $ExpectType string
        deviceInfo.screenHeight; // $ExpectType number
        deviceInfo.screenWidth; // $ExpectType number
        deviceInfo.sdkVersion; // $ExpectType string
        deviceInfo.uhd; // $ExpectType boolean | undefined
        deviceInfo.version; // $ExpectType string
        deviceInfo.versionDot; // $ExpectType number
        deviceInfo.versionMajor; // $ExpectType number
        deviceInfo.versionMinor; // $ExpectType number
        deviceInfo.uhd8K; // $ExpectType boolean | undefined
    });
}

function test_fetchAppId() {
    webOS.fetchAppId() // $ExpectType string
}

function test_fetchAppInfo() {
    // $ExpectType void
    webOS.fetchAppInfo(appInfo => {
        appInfo; // $ExpectType AppInfo | undefined
        (appInfo as WebOSTV.AppInfo).appDescription; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).bgColor; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).bgImage; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).disableBackHistoryAPI; // $ExpectType boolean | undefined
        (appInfo as WebOSTV.AppInfo).handlesRelaunch; // $ExpectType boolean | undefined
        (appInfo as WebOSTV.AppInfo).icon; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).iconColor; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).id; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).largeIcon; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).main; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).requiredMemory; // $ExpectType number | undefined
        (appInfo as WebOSTV.AppInfo).resolution; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).splashBackground; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).title; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).transparent; // $ExpectType string | undefined
        (appInfo as WebOSTV.AppInfo).type; // $ExpectType "web"
        (appInfo as WebOSTV.AppInfo).vendor; // $ExpectType string
        (appInfo as WebOSTV.AppInfo).version; // $ExpectType string
    });
}

function test_fetchAppRootPath() {
    // $ExpectType string
    webOS.fetchAppRootPath();
}

function test_keyboard_isShowing() {
    // $ExpectType boolean
    webOS.keyboard.isShowing();
}

function test_libVersion() {
    // $ExpectType "1.2.1"
    webOS.libVersion;
}

function test_platform_tv() {
    // $ExpectType true | undefined
    webOS.platform.tv
}

function test_platformBack() {
    // $ExpectType void
    webOS.platformBack();
}

function test_systemInfo() {
    // $ExpectType SystemInfo
    const systemInfo = webOS.systemInfo();
    // $ExpectType string | undefined
    systemInfo.country;
    // $ExpectType string | undefined
    systemInfo.smartServiceCountry;
    // $ExpectType string | undefined
    systemInfo.timezone;
}

function test_service_request() {
    // $ExpectType ServiceRequestReturn<{ subscribe: boolean; }>
    const returnedValue = webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true },
        onSuccess(res) {
            res; // $ExpectType any
        },
        onFailure(err) {
            err; // $ExpectType RequestErrorObject
            err.errorCode; // $ExpectType string
            err.errorText; // $ExpectType string
        }
    });

    returnedValue.cancel(); // $ExpectType void
    returnedValue.onComplete; // $ExpectType ((...args: any[]) => any) | undefined
    returnedValue.onFailure; // $ExpectType ((error: RequestErrorObject) => any) | undefined
    returnedValue.onSuccess; // $ExpectType ((result: any) => any) | undefined
    returnedValue.params; // $ExpectType { subscribe: boolean; }
    returnedValue.resubscribe; // $ExpectType boolean
    returnedValue.send; // $ExpectType () => void
    returnedValue.subscribe; // $ExpectType boolean
    returnedValue.uri; // $ExpectType string
}
