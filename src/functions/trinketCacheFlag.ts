import { copySet } from "./set";
import { getMaxTrinketID, trinketHasCacheFlag } from "./trinkets";
import { getEnumValues } from "./util";

const CACHE_FLAG_TO_TRINKETS_MAP = new Map<CacheFlag, Set<TrinketType | int>>();

function initCacheFlagMap() {
  const maxTrinketID = getMaxTrinketID();

  for (const cacheFlag of getEnumValues(CacheFlag)) {
    const trinketsSet = new Set<CollectibleType | int>();

    for (let trinketType = 1; trinketType <= maxTrinketID; trinketType++) {
      if (trinketHasCacheFlag(trinketType, cacheFlag)) {
        trinketsSet.add(trinketType);
      }
    }

    CACHE_FLAG_TO_TRINKETS_MAP.set(cacheFlag, trinketsSet);
  }
}

/**
 * Returns a set containing every trinket type with the given cache flag, including modded trinkets.
 */
export function getTrinketsForCacheFlag(
  cacheFlag: CacheFlag,
): Set<TrinketType | int> {
  // Lazy initialize the map
  if (CACHE_FLAG_TO_TRINKETS_MAP.size === 0) {
    initCacheFlagMap();
  }

  const trinketsSet = CACHE_FLAG_TO_TRINKETS_MAP.get(cacheFlag);
  if (trinketsSet === undefined) {
    return new Set();
  }

  return copySet(trinketsSet);
}
