app.factory("timestampInterceptor", function () {
	return {
		request: function (config) {
			var url = config.url;
			if (url.indexOf("partials") > -1) return config;
			var timestamp = new Date().getTime();
			config.url = url + "?timestamp=" + timestamp;
			//console.log(config.url);
			return config;
		}
	};
});
