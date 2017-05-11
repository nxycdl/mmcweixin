/**
 * Created by dl on 2017-05-11.
 */

var reSetTitleUtil = {
  reSetTitle: function (title) {
    document.title = title;    // hack在微信等webview中无法修改document.title的情况
    var mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
      var iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.setAttribute('src', 'loading.png');
      var iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe);
        }, 0);
      };
      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe);
    }
  }
};
export default reSetTitleUtil;
