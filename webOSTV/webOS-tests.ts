(() => {
    function test_deviceInfo() {
        webOS.deviceInfo(deviceInfo => {
            console.log(deviceInfo.modelName);
            console.log(deviceInfo.modelNameAscii);
            console.log(deviceInfo.screenHeight);
            console.log(deviceInfo.screenWidth);
            console.log(deviceInfo.sdkVersion);
            console.log(deviceInfo.uhd);
            console.log(deviceInfo.version);
            console.log(deviceInfo.versionDot);
            console.log(deviceInfo.versionMajor);
            console.log(deviceInfo.versionMinor);
        });
    }

    function test_fetchAppId() {
        console.log(webOS.fetchAppId());
    }

    function test_fetchAppInfo() {
        webOS.fetchAppInfo(appInfo => {
            console.log(appInfo?.appDescription);
            console.log(appInfo?.bgColor);
            console.log(appInfo?.bgImage);
            console.log(appInfo?.disableBackHistoryAPI);
            console.log(appInfo?.handlesRelaunch);
            console.log(appInfo?.icon);
            console.log(appInfo?.iconColor);
            console.log(appInfo?.id);
            console.log(appInfo?.largeIcon);
            console.log(appInfo?.main);
            console.log(appInfo?.requiredMemory);
            console.log(appInfo?.resolution);
            console.log(appInfo?.splashBackground);
            console.log(appInfo?.title);
            console.log(appInfo?.transparent);
            console.log(appInfo?.type);
            console.log(appInfo?.vendor);
            console.log(appInfo?.version);
        });
    }

    function test_fetchAppRootPath() {
        console.log(webOS.fetchAppRootPath());
    }

    function test_keyboard_isShowing() {
        console.log(webOS.keyboard.isShowing());
    }

    function test_libVersion() {
        console.log(webOS.libVersion);
    }

    function test_platform_tv() {
        console.log(webOS.platform.tv);
    }

    function test_platformBack() {
        webOS.platformBack();
    }

    function test_systemInfo() {
        const systemInfo = webOS.systemInfo();
        console.log(systemInfo.country);
        console.log(systemInfo.smartServiceCountry);
        console.log(systemInfo.timezone);
    }

    function test_service_request() {
        webOS.service.request('luna://com.palm.systemservice', {
            method: 'time/getSystemTime',
            parameters: { subscribe: true },
            onSuccess(res) {
                console.log('system time suc', res);
            },
            onFailure(res) {
                console.log('system time fail', res);
            }
        });
    }
})();
