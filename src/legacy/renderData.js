const renderData = (res, data, error, tpl, pageName) => {
    res.render(tpl, {
        appName: "TQS Sdcard Log Monitor",
        pageName,
        data: data ? data : null,
        error: error ? error : null,
    });
}

module.exports = renderData;