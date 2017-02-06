// placeholder plugin
module.exports = {
	process: (html) => Promise.resolve({
		html: html,
		warnings: () => []
	})
};
