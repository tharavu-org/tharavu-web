import Fingerprint from 'fingerprintjs2';

export default function fingerprint() {
  return new Promise(resolve => {
    const options = {
      excludes: { fonts: true, fontsFlash: true, enumerateDevices: true },
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
