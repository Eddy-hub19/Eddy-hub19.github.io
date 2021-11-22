export const getLesserEvil = (threat1, threat2) => {
  if (threat1.evilFactor > threat2.evilFactor) {
    return threat2;
  } else {
    return threat1;
  }
}