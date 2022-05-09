/*! Urlifyr */

'use strict';

module.exports = function (str, cfg) {
  const _cfg = {
    accept: '-',
    whiteSpace: '-',
    sz: true,
    special: '',
    lowerCase: true,
    trim: true,
    ...cfg
  };

  const _accept = _cfg.accept.indexOf(_cfg.whiteSpace) !== -1 ? _cfg.accept : `${_cfg.accept}${_cfg.whiteSpace}`;

  if (typeof str === 'string' || str instanceof String) {
    const rA = /[ÁáÀàÅåÄä]/g;
    const rC = /([Çç])/g;
    const rE = /([ÉéÈèÊê])/g;
    const rI = /([ÍíÌìÎî])/g;
    const rN = /([Ññ])/g;
    const rO = /([ÓóÒòÔôÖöØø])/g;
    const rS = /[ŚśŜŝŞşŠš]/g;
    const rSs = /[ß]/g;
    const rU = /([ÚúÙùÜü])/g;
    const rZ = /([Žž])/g;
    const rWS = /\s/g;
    const accept = new RegExp(`[^a-zA-Z0-9${_accept}]`, 'g');

    let url = str;

    url = url.replace(rA, 'a');
    url = url.replace(rC, 'c');
    url = url.replace(rE, 'e');
    url = url.replace(rI, 'i');
    url = url.replace(rN, 'n');
    url = url.replace(rO, 'o');
    url = url.replace(rS, 's');
    url = url.replace(rSs, _cfg.sz ? 'sz' : 'ss');
    url = url.replace(rU, 'u');
    url = url.replace(rZ, 'z');
    url = url.replace(rWS, _cfg.whiteSpace);
    url = url.replace(accept, _cfg.special);

    if (_cfg.trim) {
      url = url.replace(new RegExp(_cfg.whiteSpace + '{2,}', 'g'), _cfg.whiteSpace);
      url = url.replace(new RegExp('^' + _cfg.whiteSpace + '|' + _cfg.whiteSpace + '$', 'g'), '');
    }

    return _cfg.lowerCase ? url.toLowerCase() : url;
  } else {
    return str;
  }
};
