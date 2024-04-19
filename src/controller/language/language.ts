import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import jaJP from '@arco-design/web-react/es/locale/ja-JP';
import koKR from '@arco-design/web-react/es/locale/ko-KR';
import idID from '@arco-design/web-react/es/locale/id-ID';
import thTH from '@arco-design/web-react/es/locale/th-TH';
import zhHK from '@arco-design/web-react/es/locale/zh-HK';
import frFR from '@arco-design/web-react/es/locale/fr-FR';
import esES from '@arco-design/web-react/es/locale/es-ES';
import deDE from '@arco-design/web-react/es/locale/de-DE';
import itIT from '@arco-design/web-react/es/locale/it-IT';
import viVN from '@arco-design/web-react/es/locale/vi-VN';

function getLocale(locale:string) {
  switch (locale) {
    case 'zh-cn':
      return zhCN;
    case 'en-us':
      return enUS;
    case 'ja-jp':
      return jaJP;
    case 'ko-kr':
      return koKR;
    case 'id-id':
      return idID;
    case 'th-th':
      return thTH;
    case 'zh-hk':
      return zhHK;
    case 'fr-fr':
      return frFR;
    case 'es-es':
      return esES;
    case 'de-de':
      return deDE;
    case 'it-it':
      return itIT;
    case 'vi-vn':
      return viVN;
     default:
      return zhCN; 
  }
}
export{getLocale}