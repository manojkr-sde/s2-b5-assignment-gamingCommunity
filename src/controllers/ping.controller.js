function pingCheck(message) {
  return function (req, res) {
    return res.json({
      message: message,
    });
  };
}

module.exports = pingCheck;
