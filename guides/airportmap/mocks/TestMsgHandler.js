Aria.classDefinition({
	$classpath : 'ariadoc.guides.airportmap.mocks.TestMsgHandler',
	$extends : 'aria.core.IOFilter',
	$constructor : function () {
		this.$IOFilter.constructor.call(this);
		this._count=0;
	},
	$prototype : {
		/**
		 * Method called before a request is sent to get a chance to change its arguments
		 * @param {aria.core.RequestMgr.FilterRequest} req
		 */
		onRequest : function (req) {
	    var fileName="";
	    if (req.url=="getData") {
	      // initial request to get all the data
	      fileName="data.json";
	    } else {
	      // subsequent request to get new data since last getData
	      fileName="data"+(this._count++ %10)+".json";
	    }
			this.redirectToFile(req, "ariadoc/guides/airportmap/mocks/"+fileName);
	  }
	}
});
