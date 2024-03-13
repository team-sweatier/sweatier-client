export default function translateMatchType(capability: number) {
  const halfCapability = capability / 2;
  const result = `${halfCapability}:${halfCapability}`;
  return result;
}
