var connect = require('connect');

var app = connect()
	.use(function (req, res) {
		res.statusCode(404 or 403);
		res.end("Forbidden");
	})
	.listen(3000);
