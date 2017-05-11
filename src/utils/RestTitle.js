/**
 * Created by dl on 2017-05-11.
 */

var reSetTitleUtil = {
  reSetTitle: function (title) {
    console.log('reSetTitle');
    document.title = title;    // hack在微信等webview中无法修改document.title的情况
  }
};
export default reSetTitleUtil;
