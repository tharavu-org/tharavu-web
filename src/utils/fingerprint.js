import Fingerprint from 'fingerprintjs2';
import UAParser from 'ua-parser-js';

export default function fingerprint() {
  return new Promise(resolve => {
    const options = {
      excludes: { fonts: true, fontsFlash: true, enumerateDevices: true },
      preprocessor: (key, value) => {
        if (key === 'userAgent') {
          const parser = new UAParser(value);
          const browser = parser.getBrowser();
          const ver = browser.version.split('.')[0];
          return `${parser.getOS().name} ${browser.name} ${ver}`;
        }
        return value;
      },
    };

    const getHashWithMeta = components => {
      const values = components.map(component => {
        return component.value;
      });
      const murmur = Fingerprint.x64hash128(values.join(''), 31);
      resolve({ hash: murmur, meta: components });
    };

    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        Fingerprint.get(options, components => {
          getHashWithMeta(components);
        });
      });
    } else {
      setTimeout(() => {
        Fingerprint.get(options, components => {
          getHashWithMeta(components);
        });
      }, 500);
    }
  });
}
